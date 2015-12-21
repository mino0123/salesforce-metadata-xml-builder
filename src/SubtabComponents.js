const Container = require('./Container');

module.exports = (object, asChild) => {
  var rootTagStart = '<SubtabComponents>';
  var rootTagEnd = '</SubtabComponents>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.containers == null ? '' : object.containers.map(p => '<containers>' + Container(p, true) + '</containers>')}
${rootTagEnd}`;
}