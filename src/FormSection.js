const FormColumn = require('./FormColumn');
const FormSectionTabOrder = require('./FormSectionTabOrder');

module.exports = (object, asChild) => {
  var rootTagStart = '<FormSection>';
  var rootTagEnd = '</FormSection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.formColumns == null ? '' : object.formColumns.map(p => '<formColumns>' + FormColumn(p, true) + '</formColumns>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.tabOrderType == null ? '' : '<tabOrderType>' + FormSectionTabOrder(object.tabOrderType, true) + '</tabOrderType>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}