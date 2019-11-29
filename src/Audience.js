const AudienceCriteria = require('./AudienceCriteria');
const FormulaFilterType = require('./FormulaFilterType');
const PersonalizationTargetInfos = require('./PersonalizationTargetInfos');

module.exports = (object, asChild) => {
  var rootTagStart = '<Audience>';
  var rootTagEnd = '</Audience>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.audienceName == null ? '' : '<audienceName>' + object.audienceName + '</audienceName>'}
	${object.container == null ? '' : '<container>' + object.container + '</container>'}
	${object.criteria == null ? '' : '<criteria>' + AudienceCriteria(object.criteria, true) + '</criteria>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.formula == null ? '' : '<formula>' + object.formula + '</formula>'}
	${object.formulaFilterType == null ? '' : '<formulaFilterType>' + FormulaFilterType(object.formulaFilterType, true) + '</formulaFilterType>'}
	${object.targets == null ? '' : '<targets>' + PersonalizationTargetInfos(object.targets, true) + '</targets>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}