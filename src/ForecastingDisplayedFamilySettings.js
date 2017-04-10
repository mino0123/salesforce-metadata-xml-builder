
module.exports = (object, asChild) => {
  var rootTagStart = '<ForecastingDisplayedFamilySettings>';
  var rootTagEnd = '</ForecastingDisplayedFamilySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.productFamily == null ? '' : '<productFamily>' + object.productFamily + '</productFamily>'}
${rootTagEnd}`;
}