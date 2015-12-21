const NextOwnerType = require('./NextOwnerType');

module.exports = (object, asChild) => {
  var rootTagStart = '<Approver>';
  var rootTagEnd = '</Approver>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.type == null ? '' : '<type>' + NextOwnerType(object.type, true) + '</type>'}
${rootTagEnd}`;
}