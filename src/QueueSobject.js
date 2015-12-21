
module.exports = (object, asChild) => {
  var rootTagStart = '<QueueSobject>';
  var rootTagEnd = '</QueueSobject>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sobjectType == null ? '' : '<sobjectType>' + object.sobjectType + '</sobjectType>'}
${rootTagEnd}`;
}