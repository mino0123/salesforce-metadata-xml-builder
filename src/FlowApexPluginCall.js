const FlowConnector = require('./FlowConnector');
const FlowApexPluginCallInputParameter = require('./FlowApexPluginCallInputParameter');
const FlowApexPluginCallOutputParameter = require('./FlowApexPluginCallOutputParameter');

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
${rootTagEnd}`;
}