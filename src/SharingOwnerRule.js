const SharedTo = require('./SharedTo');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingOwnerRule>';
  var rootTagEnd = '</SharingOwnerRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sharedFrom == null ? '' : '<sharedFrom>' + SharedTo(object.sharedFrom, true) + '</sharedFrom>'}
${rootTagEnd}`;
}