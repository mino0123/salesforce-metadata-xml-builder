const PlatformActionType = require('./PlatformActionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<PlatformActionListItem>';
  var rootTagEnd = '</PlatformActionListItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionName == null ? '' : '<actionName>' + object.actionName + '</actionName>'}
	${object.actionType == null ? '' : '<actionType>' + PlatformActionType(object.actionType, true) + '</actionType>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
	${object.subtype == null ? '' : '<subtype>' + object.subtype + '</subtype>'}
${rootTagEnd}`;
}