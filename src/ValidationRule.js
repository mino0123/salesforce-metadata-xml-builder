
module.exports = (object, asChild) => {
  var rootTagStart = '<ValidationRule>';
  var rootTagEnd = '</ValidationRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.errorConditionFormula == null ? '' : '<errorConditionFormula>' + object.errorConditionFormula + '</errorConditionFormula>'}
	${object.errorDisplayField == null ? '' : '<errorDisplayField>' + object.errorDisplayField + '</errorDisplayField>'}
	${object.errorMessage == null ? '' : '<errorMessage>' + object.errorMessage + '</errorMessage>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}