const FieldMapping = require('./FieldMapping');
const CleanRuleStatus = require('./CleanRuleStatus');

module.exports = (object, asChild) => {
  var rootTagStart = '<CleanRule>';
  var rootTagEnd = '</CleanRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.bulkEnabled == null ? '' : '<bulkEnabled>' + object.bulkEnabled + '</bulkEnabled>'}
	${object.bypassTriggers == null ? '' : '<bypassTriggers>' + object.bypassTriggers + '</bypassTriggers>'}
	${object.bypassWorkflow == null ? '' : '<bypassWorkflow>' + object.bypassWorkflow + '</bypassWorkflow>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.fieldMappings == null ? '' : object.fieldMappings.map(p => '<fieldMappings>' + FieldMapping(p, true) + '</fieldMappings>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.matchRule == null ? '' : '<matchRule>' + object.matchRule + '</matchRule>'}
	${object.sourceSobjectType == null ? '' : '<sourceSobjectType>' + object.sourceSobjectType + '</sourceSobjectType>'}
	${object.status == null ? '' : '<status>' + CleanRuleStatus(object.status, true) + '</status>'}
	${object.targetSobjectType == null ? '' : '<targetSobjectType>' + object.targetSobjectType + '</targetSobjectType>'}
${rootTagEnd}`;
}