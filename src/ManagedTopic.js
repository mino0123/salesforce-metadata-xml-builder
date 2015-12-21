
module.exports = (object, asChild) => {
  var rootTagStart = '<ManagedTopic>';
  var rootTagEnd = '</ManagedTopic>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.managedTopicType == null ? '' : '<managedTopicType>' + object.managedTopicType + '</managedTopicType>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.parentName == null ? '' : '<parentName>' + object.parentName + '</parentName>'}
	${object.position == null ? '' : '<position>' + object.position + '</position>'}
	${object.topicDescription == null ? '' : '<topicDescription>' + object.topicDescription + '</topicDescription>'}
${rootTagEnd}`;
}