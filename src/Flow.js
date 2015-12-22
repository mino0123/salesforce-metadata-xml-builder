const FlowActionCall = require('./FlowActionCall');
const FlowApexPluginCall = require('./FlowApexPluginCall');
const FlowAssignment = require('./FlowAssignment');
const FlowChoice = require('./FlowChoice');
const FlowConstant = require('./FlowConstant');
const FlowDecision = require('./FlowDecision');
const FlowDynamicChoiceSet = require('./FlowDynamicChoiceSet');
const FlowFormula = require('./FlowFormula');
const FlowLoop = require('./FlowLoop');
const FlowMetadataValue = require('./FlowMetadataValue');
const FlowProcessType = require('./FlowProcessType');
const FlowRecordCreate = require('./FlowRecordCreate');
const FlowRecordDelete = require('./FlowRecordDelete');
const FlowRecordLookup = require('./FlowRecordLookup');
const FlowRecordUpdate = require('./FlowRecordUpdate');
const FlowScreen = require('./FlowScreen');
const FlowStep = require('./FlowStep');
const FlowSubflow = require('./FlowSubflow');
const FlowTextTemplate = require('./FlowTextTemplate');
const FlowVariable = require('./FlowVariable');
const FlowWait = require('./FlowWait');

module.exports = (object, asChild) => {
  var rootTagStart = '<Flow>';
  var rootTagEnd = '</Flow>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionCalls == null ? '' : object.actionCalls.map(p => '<actionCalls>' + FlowActionCall(p, true) + '</actionCalls>')}
	${object.apexPluginCalls == null ? '' : object.apexPluginCalls.map(p => '<apexPluginCalls>' + FlowApexPluginCall(p, true) + '</apexPluginCalls>')}
	${object.assignments == null ? '' : object.assignments.map(p => '<assignments>' + FlowAssignment(p, true) + '</assignments>')}
	${object.choices == null ? '' : object.choices.map(p => '<choices>' + FlowChoice(p, true) + '</choices>')}
	${object.constants == null ? '' : object.constants.map(p => '<constants>' + FlowConstant(p, true) + '</constants>')}
	${object.decisions == null ? '' : object.decisions.map(p => '<decisions>' + FlowDecision(p, true) + '</decisions>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.dynamicChoiceSets == null ? '' : object.dynamicChoiceSets.map(p => '<dynamicChoiceSets>' + FlowDynamicChoiceSet(p, true) + '</dynamicChoiceSets>')}
	${object.formulas == null ? '' : object.formulas.map(p => '<formulas>' + FlowFormula(p, true) + '</formulas>')}
	${object.interviewLabel == null ? '' : '<interviewLabel>' + object.interviewLabel + '</interviewLabel>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.loops == null ? '' : object.loops.map(p => '<loops>' + FlowLoop(p, true) + '</loops>')}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
	${object.processType == null ? '' : '<processType>' + FlowProcessType(object.processType, true) + '</processType>'}
	${object.recordCreates == null ? '' : object.recordCreates.map(p => '<recordCreates>' + FlowRecordCreate(p, true) + '</recordCreates>')}
	${object.recordDeletes == null ? '' : object.recordDeletes.map(p => '<recordDeletes>' + FlowRecordDelete(p, true) + '</recordDeletes>')}
	${object.recordLookups == null ? '' : object.recordLookups.map(p => '<recordLookups>' + FlowRecordLookup(p, true) + '</recordLookups>')}
	${object.recordUpdates == null ? '' : object.recordUpdates.map(p => '<recordUpdates>' + FlowRecordUpdate(p, true) + '</recordUpdates>')}
	${object.screens == null ? '' : object.screens.map(p => '<screens>' + FlowScreen(p, true) + '</screens>')}
	${object.startElementReference == null ? '' : '<startElementReference>' + object.startElementReference + '</startElementReference>'}
	${object.steps == null ? '' : object.steps.map(p => '<steps>' + FlowStep(p, true) + '</steps>')}
	${object.subflows == null ? '' : object.subflows.map(p => '<subflows>' + FlowSubflow(p, true) + '</subflows>')}
	${object.textTemplates == null ? '' : object.textTemplates.map(p => '<textTemplates>' + FlowTextTemplate(p, true) + '</textTemplates>')}
	${object.variables == null ? '' : object.variables.map(p => '<variables>' + FlowVariable(p, true) + '</variables>')}
	${object.waits == null ? '' : object.waits.map(p => '<waits>' + FlowWait(p, true) + '</waits>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}