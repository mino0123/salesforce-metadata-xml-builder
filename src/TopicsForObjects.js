
module.exports = (object, asChild) => {
  var rootTagStart = '<TopicsForObjects>';
  var rootTagEnd = '</TopicsForObjects>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableTopics == null ? '' : '<enableTopics>' + object.enableTopics + '</enableTopics>'}
	${object.entityApiName == null ? '' : '<entityApiName>' + object.entityApiName + '</entityApiName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}