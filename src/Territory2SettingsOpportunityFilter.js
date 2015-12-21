
module.exports = (object, asChild) => {
  var rootTagStart = '<Territory2SettingsOpportunityFilter>';
  var rootTagEnd = '</Territory2SettingsOpportunityFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apexClassName == null ? '' : '<apexClassName>' + object.apexClassName + '</apexClassName>'}
	${object.enableFilter == null ? '' : '<enableFilter>' + object.enableFilter + '</enableFilter>'}
	${object.runOnCreate == null ? '' : '<runOnCreate>' + object.runOnCreate + '</runOnCreate>'}
${rootTagEnd}`;
}