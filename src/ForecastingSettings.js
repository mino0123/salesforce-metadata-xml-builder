const DisplayCurrency = require('./DisplayCurrency');
const ForecastingCategoryMapping = require('./ForecastingCategoryMapping');
const ForecastingTypeSettings = require('./ForecastingTypeSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<ForecastingSettings>';
  var rootTagEnd = '</ForecastingSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.displayCurrency == null ? '' : '<displayCurrency>' + DisplayCurrency(object.displayCurrency, true) + '</displayCurrency>'}
	${object.enableForecasts == null ? '' : '<enableForecasts>' + object.enableForecasts + '</enableForecasts>'}
	${object.forecastingCategoryMappings == null ? '' : object.forecastingCategoryMappings.map(p => '<forecastingCategoryMappings>' + ForecastingCategoryMapping(p, true) + '</forecastingCategoryMappings>')}
	${object.forecastingTypeSettings == null ? '' : object.forecastingTypeSettings.map(p => '<forecastingTypeSettings>' + ForecastingTypeSettings(p, true) + '</forecastingTypeSettings>')}
${rootTagEnd}`;
}