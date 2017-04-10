
module.exports = (object, asChild) => {
  var rootTagStart = '<OrchestrationContextEvent>';
  var rootTagEnd = '</OrchestrationContextEvent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.eventType == null ? '' : '<eventType>' + object.eventType + '</eventType>'}
	${object.orchestrationEvent == null ? '' : '<orchestrationEvent>' + object.orchestrationEvent + '</orchestrationEvent>'}
	${object.platformEvent == null ? '' : '<platformEvent>' + object.platformEvent + '</platformEvent>'}
	${object.platformEventPrimaryKey == null ? '' : '<platformEventPrimaryKey>' + object.platformEventPrimaryKey + '</platformEventPrimaryKey>'}
${rootTagEnd}`;
}