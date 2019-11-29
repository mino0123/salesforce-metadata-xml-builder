const MlSlotClassDataType = require('./MlSlotClassDataType');
const MlSlotClassExtractionType = require('./MlSlotClassExtractionType');
const MlSlotClassValue = require('./MlSlotClassValue');

module.exports = (object, asChild) => {
  var rootTagStart = '<MlSlotClass>';
  var rootTagEnd = '</MlSlotClass>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dataType == null ? '' : '<dataType>' + MlSlotClassDataType(object.dataType, true) + '</dataType>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.extractionRegex == null ? '' : '<extractionRegex>' + object.extractionRegex + '</extractionRegex>'}
	${object.extractionType == null ? '' : '<extractionType>' + MlSlotClassExtractionType(object.extractionType, true) + '</extractionType>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.mlSlotClassValues == null ? '' : object.mlSlotClassValues.map(p => '<mlSlotClassValues>' + MlSlotClassValue(p, true) + '</mlSlotClassValues>').join('')}
${rootTagEnd}`;
}