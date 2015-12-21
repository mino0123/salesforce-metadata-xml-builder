const LogCategory = require('./LogCategory');
const LogCategoryLevel = require('./LogCategoryLevel');

module.exports = (object, asChild) => {
  var rootTagStart = '<LogInfo>';
  var rootTagEnd = '</LogInfo>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.category == null ? '' : '<category>' + LogCategory(object.category, true) + '</category>'}
	${object.level == null ? '' : '<level>' + LogCategoryLevel(object.level, true) + '</level>'}
${rootTagEnd}`;
}