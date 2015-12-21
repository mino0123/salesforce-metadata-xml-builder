const PeriodTypes = require('./PeriodTypes');

module.exports = (object, asChild) => {
  var rootTagStart = '<ForecastRangeSettings>';
  var rootTagEnd = '</ForecastRangeSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.beginning == null ? '' : '<beginning>' + object.beginning + '</beginning>'}
	${object.displaying == null ? '' : '<displaying>' + object.displaying + '</displaying>'}
	${object.periodType == null ? '' : '<periodType>' + PeriodTypes(object.periodType, true) + '</periodType>'}
${rootTagEnd}`;
}