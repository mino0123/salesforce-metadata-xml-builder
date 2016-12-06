const CustomValue = require('./CustomValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<ValueSetValuesDefinition>';
  var rootTagEnd = '</ValueSetValuesDefinition>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sorted == null ? '' : '<sorted>' + object.sorted + '</sorted>'}
	${object.value == null ? '' : object.value.map(p => '<value>' + CustomValue(p, true) + '</value>').join('')}
${rootTagEnd}`;
}