
module.exports = (object, asChild) => {
  var rootTagStart = '<OrchestrationContextEvent>';
  var rootTagEnd = '</OrchestrationContextEvent>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.platformEvent == null ? '' : '<platformEvent>' + object.platformEvent + '</platformEvent>'}
	${object.platformEventPrimaryKey == null ? '' : '<platformEventPrimaryKey>' + object.platformEventPrimaryKey + '</platformEventPrimaryKey>'}
${rootTagEnd}`;
}