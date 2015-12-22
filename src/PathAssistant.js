const PathAssistantStep = require('./PathAssistantStep');

module.exports = (object, asChild) => {
  var rootTagStart = '<PathAssistant>';
  var rootTagEnd = '</PathAssistant>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.entityName == null ? '' : '<entityName>' + object.entityName + '</entityName>'}
	${object.fieldName == null ? '' : '<fieldName>' + object.fieldName + '</fieldName>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.pathAssistantSteps == null ? '' : object.pathAssistantSteps.map(p => '<pathAssistantSteps>' + PathAssistantStep(p, true) + '</pathAssistantSteps>')}
	${object.recordTypeName == null ? '' : '<recordTypeName>' + object.recordTypeName + '</recordTypeName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}