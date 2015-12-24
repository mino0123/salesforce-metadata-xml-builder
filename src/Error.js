const StatusCode = require('./StatusCode');

module.exports = (object, asChild) => {
  var rootTagStart = '<Error>';
  var rootTagEnd = '</Error>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.fields == null ? '' : object.fields.map(p => '<fields>' + p + '</fields>').join('')}
	${object.message == null ? '' : '<message>' + object.message + '</message>'}
	${object.statusCode == null ? '' : '<statusCode>' + StatusCode(object.statusCode, true) + '</statusCode>'}
${rootTagEnd}`;
}