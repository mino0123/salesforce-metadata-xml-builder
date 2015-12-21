const CallCenterItem = require('./CallCenterItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<CallCenterSection>';
  var rootTagEnd = '</CallCenterSection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.items == null ? '' : object.items.map(p => '<items>' + CallCenterItem(p, true) + '</items>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
${rootTagEnd}`;
}