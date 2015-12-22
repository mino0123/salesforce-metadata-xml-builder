const FlowConnector = require('./FlowConnector');
const FlowApexPluginCallInputParameter = require('./FlowApexPluginCallInputParameter');
const FlowApexPluginCallOutputParameter = require('./FlowApexPluginCallOutputParameter');
const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowApexPluginCall>';
  var rootTagEnd = '</FlowApexPluginCall>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexClass == null ? '' : '<apexClass>' + object.apexClass + '</apexClass>'}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.inputParameters == null ? '' : object.inputParameters.map(p => '<inputParameters>' + FlowApexPluginCallInputParameter(p, true) + '</inputParameters>')}
	${object.outputParameters == null ? '' : object.outputParameters.map(p => '<outputParameters>' + FlowApexPluginCallOutputParameter(p, true) + '</outputParameters>')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.locationX == null ? '' : '<locationX>' + object.locationX + '</locationX>'}
	${object.locationY == null ? '' : '<locationY>' + object.locationY + '</locationY>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>')}
${rootTagEnd}`;
}