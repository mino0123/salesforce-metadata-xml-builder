const CustomLabel = require('./CustomLabel');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomLabels>';
  var rootTagEnd = '</CustomLabels>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.labels == null ? '' : object.labels.map(p => '<labels>' + CustomLabel(p, true) + '</labels>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}