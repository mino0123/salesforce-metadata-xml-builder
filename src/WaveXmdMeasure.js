
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdMeasure>';
  var rootTagEnd = '</WaveXmdMeasure>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dateFormat == null ? '' : '<dateFormat>' + object.dateFormat + '</dateFormat>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.formatCustomFormat == null ? '' : '<formatCustomFormat>' + object.formatCustomFormat + '</formatCustomFormat>'}
	${object.formatDecimalDigits == null ? '' : '<formatDecimalDigits>' + object.formatDecimalDigits + '</formatDecimalDigits>'}
	${object.formatIsNegativeParens == null ? '' : '<formatIsNegativeParens>' + object.formatIsNegativeParens + '</formatIsNegativeParens>'}
	${object.formatPrefix == null ? '' : '<formatPrefix>' + object.formatPrefix + '</formatPrefix>'}
	${object.formatSuffix == null ? '' : '<formatSuffix>' + object.formatSuffix + '</formatSuffix>'}
	${object.formatUnit == null ? '' : '<formatUnit>' + object.formatUnit + '</formatUnit>'}
	${object.formatUnitMultiplier == null ? '' : '<formatUnitMultiplier>' + object.formatUnitMultiplier + '</formatUnitMultiplier>'}
	${object.fullyQualifiedName == null ? '' : '<fullyQualifiedName>' + object.fullyQualifiedName + '</fullyQualifiedName>'}
	${object.isDerived == null ? '' : '<isDerived>' + object.isDerived + '</isDerived>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.origin == null ? '' : '<origin>' + object.origin + '</origin>'}
	${object.showDetailsDefaultFieldIndex == null ? '' : '<showDetailsDefaultFieldIndex>' + object.showDetailsDefaultFieldIndex + '</showDetailsDefaultFieldIndex>'}
	${object.showInExplorer == null ? '' : '<showInExplorer>' + object.showInExplorer + '</showInExplorer>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}