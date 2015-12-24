const Error = require('./Error');

module.exports = (object, asChild) => {
  var rootTagStart = '<SaveResult>';
  var rootTagEnd = '</SaveResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.errors == null ? '' : object.errors.map(p => '<errors>' + Error(p, true) + '</errors>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
	${object.success == null ? '' : '<success>' + object.success + '</success>'}
${rootTagEnd}`;
}