const CustomValue = require('./CustomValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<GlobalValueSet>';
  var rootTagEnd = '</GlobalValueSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customValue == null ? '' : object.customValue.map(p => '<customValue>' + CustomValue(p, true) + '</customValue>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.sorted == null ? '' : '<sorted>' + object.sorted + '</sorted>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}