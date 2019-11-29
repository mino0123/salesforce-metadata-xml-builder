
module.exports = (object, asChild) => {
  var rootTagStart = '<PersonalizationTargetInfo>';
  var rootTagEnd = '</PersonalizationTargetInfo>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.groupName == null ? '' : '<groupName>' + object.groupName + '</groupName>'}
	${object.priority == null ? '' : '<priority>' + object.priority + '</priority>'}
	${object.targetType == null ? '' : '<targetType>' + object.targetType + '</targetType>'}
	${object.targetValue == null ? '' : '<targetValue>' + object.targetValue + '</targetValue>'}
${rootTagEnd}`;
}