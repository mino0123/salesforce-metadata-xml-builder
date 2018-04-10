const FlowMetadataValue = require('./FlowMetadataValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowStage>';
  var rootTagEnd = '</FlowStage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.stageOrder == null ? '' : '<stageOrder>' + object.stageOrder + '</stageOrder>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.processMetadataValues == null ? '' : object.processMetadataValues.map(p => '<processMetadataValues>' + FlowMetadataValue(p, true) + '</processMetadataValues>').join('')}
${rootTagEnd}`;
}