
module.exports = (object, asChild) => {
  var rootTagStart = '<CampaignInfluenceModel>';
  var rootTagEnd = '</CampaignInfluenceModel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.isActive == null ? '' : '<isActive>' + object.isActive + '</isActive>'}
	${object.isDefaultModel == null ? '' : '<isDefaultModel>' + object.isDefaultModel + '</isDefaultModel>'}
	${object.isModelLocked == null ? '' : '<isModelLocked>' + object.isModelLocked + '</isModelLocked>'}
	${object.modelDescription == null ? '' : '<modelDescription>' + object.modelDescription + '</modelDescription>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.recordPreference == null ? '' : '<recordPreference>' + object.recordPreference + '</recordPreference>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}