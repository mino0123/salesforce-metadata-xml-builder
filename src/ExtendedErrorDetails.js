const ExtendedErrorCode = require('./ExtendedErrorCode');

module.exports = (object, asChild) => {
  var rootTagStart = '<ExtendedErrorDetails>';
  var rootTagEnd = '</ExtendedErrorDetails>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.extendedErrorCode == null ? '' : '<extendedErrorCode>' + ExtendedErrorCode(object.extendedErrorCode, true) + '</extendedErrorCode>'}
${rootTagEnd}`;
}