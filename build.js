const path = require('path');
const fs = require('fs');
const mkdirp = require('mkdirp');
const parseMetadata = require('salesforce-metadata-types');


const TARGET_DIR = 'src';
const METADATA_PATH = './metadata.xml';

// parse metadata wsdl
const xml = fs.readFileSync(METADATA_PATH);
var types = parseMetadata(xml);
const typeMap = new Map();
types.forEach((t) => typeMap.set(t.name, t));
types.forEach((t) => applyBaseMembers(t, typeMap));
// make directory
mkdirp.sync(TARGET_DIR);
// make metadata builders
const names = [];
types.forEach((type) => {
  const filepath = path.resolve(TARGET_DIR, type.name + '.js');
  const code = toXMLBuilder(type);
  fs.writeFileSync(filepath, code, 'utf8');
  names.push(type.name);
});
// make index.js
const indexjs = makeIndexJS(TARGET_DIR, names);
fs.writeFileSync('index.js', indexjs, 'utf8');


/**
 * @param {TypeDefinition} def
 * @param {Map<string, TypeDefinition>} map
 * @param {String} basename
 */
function applyBaseMembers(def, map, basename) {
  if (!basename) {
    basename = def.base;
  }
  if (basename && map.get(basename)) {
    const baseDef = map.get(basename);
    def.members = def.members.concat(baseDef.members);
    // to unique
    const names = def.members.map((m) => m.name);
    def.members = def.members.filter((m, i, arr) => names.indexOf(m.name) === i);
    if (baseDef.base) {
      applyBaseMembers(def, map, baseDef.base);
    }
  }
}

/**
 * @param {String} type
 * @return {Boolean}
 */
function isPrimitive(type) {
  return ['string', 'number', 'boolean', 'any'].indexOf(type) >= 0;
}

/**
 * Create xml builder javascript.
 * @param {TypeDefinition} type
 * @return {String} jvascript source code
 */
function toXMLBuilder(type) {
  if (type.enumerations) {
    const json = JSON.stringify(type.enumerations);
    return `module.exports = (value) => {
  if (!value) { return ''; }
  if (${json}.indexOf(value) < 0) {
    throw new Error('Invalid ${type.name} value: ' + value);
  }
  return value;
};`;
  } else {
    var requireCode = '', codes = [];
    if (type.members) {
      const types = type.members.map((m) => m.type);
      requireCode = type.members
        .filter((m, i , arr) => types.indexOf(m.type) === i)// unique
        .filter((m) => !isPrimitive(m.type))
        .map((m) => {
          return `const ${m.type} = require('./${m.type}');\n`;
        }).join('');
      codes = type.members.map((m) => {
        const n = m.name;
        const paramExp = `object.${n}`;
        if (m.isArray) {
          if (isPrimitive(m.type)) {
            const pArrayExp = `'<${n}>' + p + '</${n}>'`;
            return '\t${' + `${paramExp} == null ? '' : ${paramExp}.map(p => ${pArrayExp}).join('')}`;
          } else {
            const objArrayExp = `'<${n}>' + ${m.type}(p, true) + '</${n}>'`;
            return '\t${' + `${paramExp} == null ? '' : ${paramExp}.map(p => ${objArrayExp}).join('')}`;
          }
        } else {
          if (isPrimitive(m.type)) {
            return '\t${' + `${paramExp} == null ? '' : '<${n}>' + object.${n} + '</${n}>'}`;
          } else {
            return '\t${' + `${paramExp} == null ? '' : '<${n}>' + ${m.type}(object.${m.name}, true) + '</${n}>'}`;
          }
        }
      });
    }
    return `${requireCode}
module.exports = (object, asChild) => {
  var rootTagStart = '<${type.name}>';
  var rootTagEnd = '</${type.name}>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return \`\${rootTagStart}
${codes.join('\n')}
\${rootTagEnd}\`;
}`;
  }
}

/**
 * @param {String} dir
 * @param {Array<String>} names
 * @returns {String}
 */
function makeIndexJS(dir, names) {
  return `module.exports = {
  ` + names.map((n) => {
    const filepath = path.resolve(dir, n + '.js');
    var relative = './' + path.relative('./', filepath)
    relative = relative.replace(new RegExp('\\' + path.sep, 'g'), '/');
    return `${n}: require('${relative}')`;
  }).join(`,
  `) + `
};`;
}
