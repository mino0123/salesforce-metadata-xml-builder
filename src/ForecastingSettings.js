const ForecastingCategoryMapping = require('./ForecastingCategoryMapping');
const ForecastingDisplayedFamilySettings = require('./ForecastingDisplayedFamilySettings');
const ForecastingTypeSettings = require('./ForecastingTypeSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<ForecastingSettings>';
  var rootTagEnd = '</ForecastingSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.defaultToPersonalCurrency == null ? '' : '<defaultToPersonalCurrency>' + object.defaultToPersonalCurrency + '</defaultToPersonalCurrency>'}
	${object.enableForecasts == null ? '' : '<enableForecasts>' + object.enableForecasts + '</enableForecasts>'}
	${object.forecastingCategoryMappings == null ? '' : object.forecastingCategoryMappings.map(p => '<forecastingCategoryMappings>' + ForecastingCategoryMapping(p, true) + '</forecastingCategoryMappings>').join('')}
	${object.forecastingDisplayedFamilySettings == null ? '' : object.forecastingDisplayedFamilySettings.map(p => '<forecastingDisplayedFamilySettings>' + ForecastingDisplayedFamilySettings(p, true) + '</forecastingDisplayedFamilySettings>').join('')}
	${object.forecastingTypeSettings == null ? '' : object.forecastingTypeSettings.map(p => '<forecastingTypeSettings>' + ForecastingTypeSettings(p, true) + '</forecastingTypeSettings>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}