const PlatformActionListContext = require('./PlatformActionListContext');
const PlatformActionListItem = require('./PlatformActionListItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformActionList>';
  var rootTagEnd = '</PlatformActionList>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionListContext == null ? '' : '<actionListContext>' + PlatformActionListContext(object.actionListContext, true) + '</actionListContext>'}
	${object.platformActionListItems == null ? '' : object.platformActionListItems.map(p => '<platformActionListItems>' + PlatformActionListItem(p, true) + '</platformActionListItems>')}
	${object.relatedSourceEntity == null ? '' : '<relatedSourceEntity>' + object.relatedSourceEntity + '</relatedSourceEntity>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}