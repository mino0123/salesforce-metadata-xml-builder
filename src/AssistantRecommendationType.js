const PlatformActionList = require('./PlatformActionList');

module.exports = (object, asChild) => {
  var rootTagStart = '<AssistantRecommendationType>';
  var rootTagEnd = '</AssistantRecommendationType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.platformActionlist == null ? '' : '<platformActionlist>' + PlatformActionList(object.platformActionlist, true) + '</platformActionlist>'}
	${object.sobjectType == null ? '' : '<sobjectType>' + object.sobjectType + '</sobjectType>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}