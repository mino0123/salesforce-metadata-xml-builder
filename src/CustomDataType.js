const CustomDataTypeComponent = require('./CustomDataTypeComponent');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomDataType>';
  var rootTagEnd = '</CustomDataType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customDataTypeComponents == null ? '' : object.customDataTypeComponents.map(p => '<customDataTypeComponents>' + CustomDataTypeComponent(p, true) + '</customDataTypeComponents>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.displayFormula == null ? '' : '<displayFormula>' + object.displayFormula + '</displayFormula>'}
	${object.editComponentsOnSeparateLines == null ? '' : '<editComponentsOnSeparateLines>' + object.editComponentsOnSeparateLines + '</editComponentsOnSeparateLines>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.rightAligned == null ? '' : '<rightAligned>' + object.rightAligned + '</rightAligned>'}
	${object.supportComponentsInReports == null ? '' : '<supportComponentsInReports>' + object.supportComponentsInReports + '</supportComponentsInReports>'}
${rootTagEnd}`;
}