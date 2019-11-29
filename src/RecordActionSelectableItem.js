const RecordActionType = require('./RecordActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecordActionSelectableItem>';
  var rootTagEnd = '</RecordActionSelectableItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + object.action + '</action>'}
	${object.type == null ? '' : '<type>' + RecordActionType(object.type, true) + '</type>'}
${rootTagEnd}`;
}