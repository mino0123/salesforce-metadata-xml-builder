const GlobalPicklistValue = require('./GlobalPicklistValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<GlobalPicklist>';
  var rootTagEnd = '</GlobalPicklist>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.globalPicklistValues == null ? '' : object.globalPicklistValues.map(p => '<globalPicklistValues>' + GlobalPicklistValue(p, true) + '</globalPicklistValues>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.sorted == null ? '' : '<sorted>' + object.sorted + '</sorted>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}