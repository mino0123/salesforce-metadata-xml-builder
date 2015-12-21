const ID = require('./ID');

module.exports = (object, asChild) => {
  var rootTagStart = '<CancelDeployResult>';
  var rootTagEnd = '</CancelDeployResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.done == null ? '' : '<done>' + object.done + '</done>'}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
${rootTagEnd}`;
}