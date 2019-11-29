
module.exports = (object, asChild) => {
  var rootTagStart = '<EssentialsTrialOrgSettings>';
  var rootTagEnd = '</EssentialsTrialOrgSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableSampleDataDeleted == null ? '' : '<enableSampleDataDeleted>' + object.enableSampleDataDeleted + '</enableSampleDataDeleted>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}