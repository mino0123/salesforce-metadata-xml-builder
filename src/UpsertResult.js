const Error = require('./Error');

module.exports = (object, asChild) => {
  var rootTagStart = '<UpsertResult>';
  var rootTagEnd = '</UpsertResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.created == null ? '' : '<created>' + object.created + '</created>'}
	${object.errors == null ? '' : object.errors.map(p => '<errors>' + Error(p, true) + '</errors>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
	${object.success == null ? '' : '<success>' + object.success + '</success>'}
${rootTagEnd}`;
}