const PinnedAction = require('./PinnedAction');
const RecordActionType = require('./RecordActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecordActionDefaultItem>';
  var rootTagEnd = '</RecordActionDefaultItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.action == null ? '' : '<action>' + object.action + '</action>'}
	${object.isMandatory == null ? '' : '<isMandatory>' + object.isMandatory + '</isMandatory>'}
	${object.isUiRemoveHidden == null ? '' : '<isUiRemoveHidden>' + object.isUiRemoveHidden + '</isUiRemoveHidden>'}
	${object.pinned == null ? '' : '<pinned>' + PinnedAction(object.pinned, true) + '</pinned>'}
	${object.position == null ? '' : '<position>' + object.position + '</position>'}
	${object.type == null ? '' : '<type>' + RecordActionType(object.type, true) + '</type>'}
${rootTagEnd}`;
}