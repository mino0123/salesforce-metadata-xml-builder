const AdjustmentsSettings = require('./AdjustmentsSettings');
const ForecastRangeSettings = require('./ForecastRangeSettings');
const OpportunityListFieldsSelectedSettings = require('./OpportunityListFieldsSelectedSettings');
const QuotasSettings = require('./QuotasSettings');

module.exports = (object, asChild) => {
  var rootTagStart = '<ForecastingTypeSettings>';
  var rootTagEnd = '</ForecastingTypeSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.active == null ? '' : '<active>' + object.active + '</active>'}
	${object.adjustmentsSettings == null ? '' : '<adjustmentsSettings>' + AdjustmentsSettings(object.adjustmentsSettings, true) + '</adjustmentsSettings>'}
	${object.displayedCategoryApiNames == null ? '' : object.displayedCategoryApiNames.map(p => '<displayedCategoryApiNames>' + p + '</displayedCategoryApiNames>')}
	${object.forecastRangeSettings == null ? '' : '<forecastRangeSettings>' + ForecastRangeSettings(object.forecastRangeSettings, true) + '</forecastRangeSettings>'}
	${object.forecastedCategoryApiNames == null ? '' : object.forecastedCategoryApiNames.map(p => '<forecastedCategoryApiNames>' + p + '</forecastedCategoryApiNames>')}
	${object.managerAdjustableCategoryApiNames == null ? '' : object.managerAdjustableCategoryApiNames.map(p => '<managerAdjustableCategoryApiNames>' + p + '</managerAdjustableCategoryApiNames>')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.opportunityListFieldsSelectedSettings == null ? '' : '<opportunityListFieldsSelectedSettings>' + OpportunityListFieldsSelectedSettings(object.opportunityListFieldsSelectedSettings, true) + '</opportunityListFieldsSelectedSettings>'}
	${object.ownerAdjustableCategoryApiNames == null ? '' : object.ownerAdjustableCategoryApiNames.map(p => '<ownerAdjustableCategoryApiNames>' + p + '</ownerAdjustableCategoryApiNames>')}
	${object.quotasSettings == null ? '' : '<quotasSettings>' + QuotasSettings(object.quotasSettings, true) + '</quotasSettings>'}
${rootTagEnd}`;
}