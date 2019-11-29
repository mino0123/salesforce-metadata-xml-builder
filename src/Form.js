const FormSection = require('./FormSection');

module.exports = (object, asChild) => {
  var rootTagStart = '<Form>';
  var rootTagEnd = '</Form>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.formSections == null ? '' : object.formSections.map(p => '<formSections>' + FormSection(p, true) + '</formSections>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}