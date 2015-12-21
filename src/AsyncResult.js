const ID = require('./ID');
const AsyncRequestState = require('./AsyncRequestState');
const StatusCode = require('./StatusCode');

module.exports = (object, asChild) => {
  var rootTagStart = '<AsyncResult>';
  var rootTagEnd = '</AsyncResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.done == null ? '' : '<done>' + object.done + '</done>'}
	${object.id == null ? '' : '<id>' + ID(object.id, true) + '</id>'}
	${object.message == null ? '' : '<message>' + object.message + '</message>'}
	${object.state == null ? '' : '<state>' + AsyncRequestState(object.state, true) + '</state>'}
	${object.statusCode == null ? '' : '<statusCode>' + StatusCode(object.statusCode, true) + '</statusCode>'}
${rootTagEnd}`;
}