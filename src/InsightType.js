const InsightTrendType = require('./InsightTrendType');
const InsightParentType = require('./InsightParentType');

module.exports = (object, asChild) => {
  var rootTagStart = '<InsightType>';
  var rootTagEnd = '</InsightType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultTrendType == null ? '' : '<defaultTrendType>' + InsightTrendType(object.defaultTrendType, true) + '</defaultTrendType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.parentType == null ? '' : '<parentType>' + InsightParentType(object.parentType, true) + '</parentType>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}