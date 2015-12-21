const ID = require('./ID');

module.exports = (object, asChild) => {
  var rootTagStart = '<CodeCoverageWarning>';
  var rootTagEnd = '</CodeCoverageWarning>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
	${object.message == null ? '' : '<message>' + object.message + '</message>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.namespace == null ? '' : '<namespace>' + object.namespace + '</namespace>'}
${rootTagEnd}`;
}