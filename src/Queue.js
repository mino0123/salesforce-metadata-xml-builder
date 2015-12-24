const QueueSobject = require('./QueueSobject');

module.exports = (object, asChild) => {
  var rootTagStart = '<Queue>';
  var rootTagEnd = '</Queue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.doesSendEmailToMembers == null ? '' : '<doesSendEmailToMembers>' + object.doesSendEmailToMembers + '</doesSendEmailToMembers>'}
	${object.email == null ? '' : '<email>' + object.email + '</email>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.queueSobject == null ? '' : object.queueSobject.map(p => '<queueSobject>' + QueueSobject(p, true) + '</queueSobject>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}