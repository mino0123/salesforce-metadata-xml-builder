const AdjustmentsSettings = require('./AdjustmentsSettings');
const ForecastRangeSettings = require('./ForecastRangeSettings');
const ForecastingDateType = require('./ForecastingDateType');
const OpportunityListFieldsLabelMapping = require('./OpportunityListFieldsLabelMapping');
const OpportunityListFieldsSelectedSettings = require('./OpportunityListFieldsSelectedSettings');
const OpportunityListFieldsUnselectedSettings = require('./OpportunityListFieldsUnselectedSettings');
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
	${object.displayedCategoryApiNames == null ? '' : object.displayedCategoryApiNames.map(p => '<displayedCategoryApiNames>' + p + '</displayedCategoryApiNames>').join('')}
	${object.forecastRangeSettings == null ? '' : '<forecastRangeSettings>' + ForecastRangeSettings(object.forecastRangeSettings, true) + '</forecastRangeSettings>'}
	${object.forecastedCategoryApiNames == null ? '' : object.forecastedCategoryApiNames.map(p => '<forecastedCategoryApiNames>' + p + '</forecastedCategoryApiNames>').join('')}
	${object.forecastingDateType == null ? '' : '<forecastingDateType>' + ForecastingDateType(object.forecastingDateType, true) + '</forecastingDateType>'}
	${object.hasProductFamily == null ? '' : '<hasProductFamily>' + object.hasProductFamily + '</hasProductFamily>'}
	${object.isAmount == null ? '' : '<isAmount>' + object.isAmount + '</isAmount>'}
	${object.isAvailable == null ? '' : '<isAvailable>' + object.isAvailable + '</isAvailable>'}
	${object.isQuantity == null ? '' : '<isQuantity>' + object.isQuantity + '</isQuantity>'}
	${object.managerAdjustableCategoryApiNames == null ? '' : object.managerAdjustableCategoryApiNames.map(p => '<managerAdjustableCategoryApiNames>' + p + '</managerAdjustableCategoryApiNames>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.opportunityListFieldsLabelMappings == null ? '' : object.opportunityListFieldsLabelMappings.map(p => '<opportunityListFieldsLabelMappings>' + OpportunityListFieldsLabelMapping(p, true) + '</opportunityListFieldsLabelMappings>').join('')}
	${object.opportunityListFieldsSelectedSettings == null ? '' : '<opportunityListFieldsSelectedSettings>' + OpportunityListFieldsSelectedSettings(object.opportunityListFieldsSelectedSettings, true) + '</opportunityListFieldsSelectedSettings>'}
	${object.opportunityListFieldsUnselectedSettings == null ? '' : '<opportunityListFieldsUnselectedSettings>' + OpportunityListFieldsUnselectedSettings(object.opportunityListFieldsUnselectedSettings, true) + '</opportunityListFieldsUnselectedSettings>'}
	${object.opportunitySplitName == null ? '' : '<opportunitySplitName>' + object.opportunitySplitName + '</opportunitySplitName>'}
	${object.ownerAdjustableCategoryApiNames == null ? '' : object.ownerAdjustableCategoryApiNames.map(p => '<ownerAdjustableCategoryApiNames>' + p + '</ownerAdjustableCategoryApiNames>').join('')}
	${object.quotasSettings == null ? '' : '<quotasSettings>' + QuotasSettings(object.quotasSettings, true) + '</quotasSettings>'}
	${object.territory2ModelName == null ? '' : '<territory2ModelName>' + object.territory2ModelName + '</territory2ModelName>'}
${rootTagEnd}`;
}