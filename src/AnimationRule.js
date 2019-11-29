
module.exports = (object, asChild) => {
  var rootTagStart = '<AnimationRule>';
  var rootTagEnd = '</AnimationRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.animationFrequency == null ? '' : '<animationFrequency>' + object.animationFrequency + '</animationFrequency>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.recordTypeContext == null ? '' : '<recordTypeContext>' + object.recordTypeContext + '</recordTypeContext>'}
	${object.recordTypeName == null ? '' : '<recordTypeName>' + object.recordTypeName + '</recordTypeName>'}
	${object.sobjectType == null ? '' : '<sobjectType>' + object.sobjectType + '</sobjectType>'}
	${object.targetField == null ? '' : '<targetField>' + object.targetField + '</targetField>'}
	${object.targetFieldChangeToValues == null ? '' : '<targetFieldChangeToValues>' + object.targetFieldChangeToValues + '</targetFieldChangeToValues>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}