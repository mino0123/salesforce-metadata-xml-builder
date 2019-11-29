
module.exports = (object, asChild) => {
  var rootTagStart = '<SurveySettings>';
  var rootTagEnd = '</SurveySettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableSurvey == null ? '' : '<enableSurvey>' + object.enableSurvey + '</enableSurvey>'}
	${object.enableSurveyOwnerCanManageResponse == null ? '' : '<enableSurveyOwnerCanManageResponse>' + object.enableSurveyOwnerCanManageResponse + '</enableSurveyOwnerCanManageResponse>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}