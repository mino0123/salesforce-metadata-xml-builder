const ReportAggregateReference = require('./ReportAggregateReference');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportBlockInfo>';
  var rootTagEnd = '</ReportBlockInfo>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.aggregateReferences == null ? '' : object.aggregateReferences.map(p => '<aggregateReferences>' + ReportAggregateReference(p, true) + '</aggregateReferences>')}
	${object.blockId == null ? '' : '<blockId>' + object.blockId + '</blockId>'}
	${object.joinTable == null ? '' : '<joinTable>' + object.joinTable + '</joinTable>'}
${rootTagEnd}`;
}