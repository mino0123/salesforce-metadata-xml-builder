const StandardValue = require('./StandardValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<StandardValueSet>';
  var rootTagEnd = '</StandardValueSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.sorted == null ? '' : '<sorted>' + object.sorted + '</sorted>'}
	${object.standardValue == null ? '' : object.standardValue.map(p => '<standardValue>' + StandardValue(p, true) + '</standardValue>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}