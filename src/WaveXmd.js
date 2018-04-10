const WaveXmdDate = require('./WaveXmdDate');
const WaveXmdDimension = require('./WaveXmdDimension');
const WaveXmdMeasure = require('./WaveXmdMeasure');
const WaveXmdOrganization = require('./WaveXmdOrganization');

module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmd>';
  var rootTagEnd = '</WaveXmd>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.application == null ? '' : '<application>' + object.application + '</application>'}
	${object.dataset == null ? '' : '<dataset>' + object.dataset + '</dataset>'}
	${object.datasetConnector == null ? '' : '<datasetConnector>' + object.datasetConnector + '</datasetConnector>'}
	${object.datasetFullyQualifiedName == null ? '' : '<datasetFullyQualifiedName>' + object.datasetFullyQualifiedName + '</datasetFullyQualifiedName>'}
	${object.dates == null ? '' : object.dates.map(p => '<dates>' + WaveXmdDate(p, true) + '</dates>').join('')}
	${object.dimensions == null ? '' : object.dimensions.map(p => '<dimensions>' + WaveXmdDimension(p, true) + '</dimensions>').join('')}
	${object.measures == null ? '' : object.measures.map(p => '<measures>' + WaveXmdMeasure(p, true) + '</measures>').join('')}
	${object.organizations == null ? '' : object.organizations.map(p => '<organizations>' + WaveXmdOrganization(p, true) + '</organizations>').join('')}
	${object.origin == null ? '' : '<origin>' + object.origin + '</origin>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
	${object.waveVisualization == null ? '' : '<waveVisualization>' + object.waveVisualization + '</waveVisualization>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}