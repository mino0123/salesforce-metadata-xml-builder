const QueueMembers = require('./QueueMembers');
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
	${object.queueMembers == null ? '' : '<queueMembers>' + QueueMembers(object.queueMembers, true) + '</queueMembers>'}
	${object.queueRoutingConfig == null ? '' : '<queueRoutingConfig>' + object.queueRoutingConfig + '</queueRoutingConfig>'}
	${object.queueSobject == null ? '' : object.queueSobject.map(p => '<queueSobject>' + QueueSobject(p, true) + '</queueSobject>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}