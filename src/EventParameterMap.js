
module.exports = (object, asChild) => {
  var rootTagStart = '<EventParameterMap>';
  var rootTagEnd = '</EventParameterMap>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.parameterName == null ? '' : '<parameterName>' + object.parameterName + '</parameterName>'}
	${object.parameterValue == null ? '' : '<parameterValue>' + object.parameterValue + '</parameterValue>'}
${rootTagEnd}`;
}