const Container = require('./Container');

module.exports = (object, asChild) => {
  var rootTagStart = '<PrimaryTabComponents>';
  var rootTagEnd = '</PrimaryTabComponents>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.containers == null ? '' : object.containers.map(p => '<containers>' + Container(p, true) + '</containers>')}
${rootTagEnd}`;
}