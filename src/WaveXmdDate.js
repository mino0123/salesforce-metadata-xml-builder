
module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdDate>';
  var rootTagEnd = '</WaveXmdDate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.alias == null ? '' : '<alias>' + object.alias + '</alias>'}
	${object.compact == null ? '' : '<compact>' + object.compact + '</compact>'}
	${object.dateFieldDay == null ? '' : '<dateFieldDay>' + object.dateFieldDay + '</dateFieldDay>'}
	${object.dateFieldEpochDay == null ? '' : '<dateFieldEpochDay>' + object.dateFieldEpochDay + '</dateFieldEpochDay>'}
	${object.dateFieldEpochSecond == null ? '' : '<dateFieldEpochSecond>' + object.dateFieldEpochSecond + '</dateFieldEpochSecond>'}
	${object.dateFieldFiscalMonth == null ? '' : '<dateFieldFiscalMonth>' + object.dateFieldFiscalMonth + '</dateFieldFiscalMonth>'}
	${object.dateFieldFiscalQuarter == null ? '' : '<dateFieldFiscalQuarter>' + object.dateFieldFiscalQuarter + '</dateFieldFiscalQuarter>'}
	${object.dateFieldFiscalWeek == null ? '' : '<dateFieldFiscalWeek>' + object.dateFieldFiscalWeek + '</dateFieldFiscalWeek>'}
	${object.dateFieldFiscalYear == null ? '' : '<dateFieldFiscalYear>' + object.dateFieldFiscalYear + '</dateFieldFiscalYear>'}
	${object.dateFieldFullYear == null ? '' : '<dateFieldFullYear>' + object.dateFieldFullYear + '</dateFieldFullYear>'}
	${object.dateFieldHour == null ? '' : '<dateFieldHour>' + object.dateFieldHour + '</dateFieldHour>'}
	${object.dateFieldMinute == null ? '' : '<dateFieldMinute>' + object.dateFieldMinute + '</dateFieldMinute>'}
	${object.dateFieldMonth == null ? '' : '<dateFieldMonth>' + object.dateFieldMonth + '</dateFieldMonth>'}
	${object.dateFieldQuarter == null ? '' : '<dateFieldQuarter>' + object.dateFieldQuarter + '</dateFieldQuarter>'}
	${object.dateFieldSecond == null ? '' : '<dateFieldSecond>' + object.dateFieldSecond + '</dateFieldSecond>'}
	${object.dateFieldWeek == null ? '' : '<dateFieldWeek>' + object.dateFieldWeek + '</dateFieldWeek>'}
	${object.dateFieldYear == null ? '' : '<dateFieldYear>' + object.dateFieldYear + '</dateFieldYear>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.firstDayOfWeek == null ? '' : '<firstDayOfWeek>' + object.firstDayOfWeek + '</firstDayOfWeek>'}
	${object.fiscalMonthOffset == null ? '' : '<fiscalMonthOffset>' + object.fiscalMonthOffset + '</fiscalMonthOffset>'}
	${object.isYearEndFiscalYear == null ? '' : '<isYearEndFiscalYear>' + object.isYearEndFiscalYear + '</isYearEndFiscalYear>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.showInExplorer == null ? '' : '<showInExplorer>' + object.showInExplorer + '</showInExplorer>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
${rootTagEnd}`;
}