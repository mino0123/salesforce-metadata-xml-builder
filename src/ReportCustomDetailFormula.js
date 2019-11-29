
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportCustomDetailFormula>';
  var rootTagEnd = '</ReportCustomDetailFormula>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.calculatedFormula == null ? '' : '<calculatedFormula>' + object.calculatedFormula + '</calculatedFormula>'}
	${object.dataType == null ? '' : '<dataType>' + object.dataType + '</dataType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.scale == null ? '' : '<scale>' + object.scale + '</scale>'}
${rootTagEnd}`;
}