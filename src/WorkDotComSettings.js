
module.exports = (object, asChild) => {
  var rootTagStart = '<WorkDotComSettings>';
  var rootTagEnd = '</WorkDotComSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableCoachingManagerGroupAccess == null ? '' : '<enableCoachingManagerGroupAccess>' + object.enableCoachingManagerGroupAccess + '</enableCoachingManagerGroupAccess>'}
	${object.enableGoalManagerGroupAccess == null ? '' : '<enableGoalManagerGroupAccess>' + object.enableGoalManagerGroupAccess + '</enableGoalManagerGroupAccess>'}
	${object.enableProfileSkills == null ? '' : '<enableProfileSkills>' + object.enableProfileSkills + '</enableProfileSkills>'}
	${object.enableProfileSkillsAddFeedPost == null ? '' : '<enableProfileSkillsAddFeedPost>' + object.enableProfileSkillsAddFeedPost + '</enableProfileSkillsAddFeedPost>'}
	${object.enableProfileSkillsAutoSuggest == null ? '' : '<enableProfileSkillsAutoSuggest>' + object.enableProfileSkillsAutoSuggest + '</enableProfileSkillsAutoSuggest>'}
	${object.enableProfileSkillsUsePlatform == null ? '' : '<enableProfileSkillsUsePlatform>' + object.enableProfileSkillsUsePlatform + '</enableProfileSkillsUsePlatform>'}
	${object.enableWorkBadgeDefRestrictPref == null ? '' : '<enableWorkBadgeDefRestrictPref>' + object.enableWorkBadgeDefRestrictPref + '</enableWorkBadgeDefRestrictPref>'}
	${object.enableWorkCalibration == null ? '' : '<enableWorkCalibration>' + object.enableWorkCalibration + '</enableWorkCalibration>'}
	${object.enableWorkCanvasPref == null ? '' : '<enableWorkCanvasPref>' + object.enableWorkCanvasPref + '</enableWorkCanvasPref>'}
	${object.enableWorkCertification == null ? '' : '<enableWorkCertification>' + object.enableWorkCertification + '</enableWorkCertification>'}
	${object.enableWorkCertificationNotification == null ? '' : '<enableWorkCertificationNotification>' + object.enableWorkCertificationNotification + '</enableWorkCertificationNotification>'}
	${object.enableWorkRewardsPref == null ? '' : '<enableWorkRewardsPref>' + object.enableWorkRewardsPref + '</enableWorkRewardsPref>'}
	${object.enableWorkThanksPref == null ? '' : '<enableWorkThanksPref>' + object.enableWorkThanksPref + '</enableWorkThanksPref>'}
	${object.enableWorkUseObjectivesForGoals == null ? '' : '<enableWorkUseObjectivesForGoals>' + object.enableWorkUseObjectivesForGoals + '</enableWorkUseObjectivesForGoals>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}