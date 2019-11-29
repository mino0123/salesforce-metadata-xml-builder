
module.exports = (object, asChild) => {
  var rootTagStart = '<ServiceChannelFieldPriority>';
  var rootTagEnd = '</ServiceChannelFieldPriority>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.priority == null ? '' : '<priority>' + object.priority + '</priority>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}