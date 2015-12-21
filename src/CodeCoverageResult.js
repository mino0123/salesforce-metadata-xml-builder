const CodeLocation = require('./CodeLocation');
const ID = require('./ID');

module.exports = (object, asChild) => {
  var rootTagStart = '<CodeCoverageResult>';
  var rootTagEnd = '</CodeCoverageResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dmlInfo == null ? '' : object.dmlInfo.map(p => '<dmlInfo>' + CodeLocation(p, true) + '</dmlInfo>')}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
	${object.locationsNotCovered == null ? '' : object.locationsNotCovered.map(p => '<locationsNotCovered>' + CodeLocation(p, true) + '</locationsNotCovered>')}
	${object.methodInfo == null ? '' : object.methodInfo.map(p => '<methodInfo>' + CodeLocation(p, true) + '</methodInfo>')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.namespace == null ? '' : '<namespace>' + object.namespace + '</namespace>'}
	${object.numLocations == null ? '' : '<numLocations>' + object.numLocations + '</numLocations>'}
	${object.numLocationsNotCovered == null ? '' : '<numLocationsNotCovered>' + object.numLocationsNotCovered + '</numLocationsNotCovered>'}
	${object.soqlInfo == null ? '' : object.soqlInfo.map(p => '<soqlInfo>' + CodeLocation(p, true) + '</soqlInfo>')}
	${object.soslInfo == null ? '' : object.soslInfo.map(p => '<soslInfo>' + CodeLocation(p, true) + '</soslInfo>')}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}