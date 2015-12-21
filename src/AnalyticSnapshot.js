const AnalyticSnapshotMapping = require('./AnalyticSnapshotMapping');

module.exports = (object, asChild) => {
  var rootTagStart = '<AnalyticSnapshot>';
  var rootTagEnd = '</AnalyticSnapshot>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.groupColumn == null ? '' : '<groupColumn>' + object.groupColumn + '</groupColumn>'}
	${object.mappings == null ? '' : object.mappings.map(p => '<mappings>' + AnalyticSnapshotMapping(p, true) + '</mappings>')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.runningUser == null ? '' : '<runningUser>' + object.runningUser + '</runningUser>'}
	${object.sourceReport == null ? '' : '<sourceReport>' + object.sourceReport + '</sourceReport>'}
	${object.targetObject == null ? '' : '<targetObject>' + object.targetObject + '</targetObject>'}
${rootTagEnd}`;
}