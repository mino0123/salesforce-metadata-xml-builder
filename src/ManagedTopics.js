const ManagedTopic = require('./ManagedTopic');

module.exports = (object, asChild) => {
  var rootTagStart = '<ManagedTopics>';
  var rootTagEnd = '</ManagedTopics>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.managedTopic == null ? '' : object.managedTopic.map(p => '<managedTopic>' + ManagedTopic(p, true) + '</managedTopic>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}