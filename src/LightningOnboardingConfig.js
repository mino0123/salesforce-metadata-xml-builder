
module.exports = (object, asChild) => {
  var rootTagStart = '<LightningOnboardingConfig>';
  var rootTagEnd = '</LightningOnboardingConfig>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.collaborationGroup == null ? '' : '<collaborationGroup>' + object.collaborationGroup + '</collaborationGroup>'}
	${object.customQuestion == null ? '' : '<customQuestion>' + object.customQuestion + '</customQuestion>'}
	${object.feedbackFormDaysFrequency == null ? '' : '<feedbackFormDaysFrequency>' + object.feedbackFormDaysFrequency + '</feedbackFormDaysFrequency>'}
	${object.isCustom == null ? '' : '<isCustom>' + object.isCustom + '</isCustom>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.sendFeedbackToSalesforce == null ? '' : '<sendFeedbackToSalesforce>' + object.sendFeedbackToSalesforce + '</sendFeedbackToSalesforce>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}