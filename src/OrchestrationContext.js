const OrchestrationContextDataset = require('./OrchestrationContextDataset');
const OrchestrationContextEvent = require('./OrchestrationContextEvent');

module.exports = (object, asChild) => {
  var rootTagStart = '<OrchestrationContext>';
  var rootTagEnd = '</OrchestrationContext>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.datasets == null ? '' : object.datasets.map(p => '<datasets>' + OrchestrationContextDataset(p, true) + '</datasets>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.events == null ? '' : object.events.map(p => '<events>' + OrchestrationContextEvent(p, true) + '</events>').join('')}
	${object.imageFile == null ? '' : '<imageFile>' + object.imageFile + '</imageFile>'}
	${object.imageScale == null ? '' : '<imageScale>' + object.imageScale + '</imageScale>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.runtimeType == null ? '' : '<runtimeType>' + object.runtimeType + '</runtimeType>'}
	${object.salesforceObject == null ? '' : '<salesforceObject>' + object.salesforceObject + '</salesforceObject>'}
	${object.salesforceObjectPrimaryKey == null ? '' : '<salesforceObjectPrimaryKey>' + object.salesforceObjectPrimaryKey + '</salesforceObjectPrimaryKey>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}