
module.exports = (object, asChild) => {
  var rootTagStart = '<CampaignInfluenceModel>';
  var rootTagEnd = '</CampaignInfluenceModel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.isDefaultModel == null ? '' : '<isDefaultModel>' + object.isDefaultModel + '</isDefaultModel>'}
	${object.isModelLocked == null ? '' : '<isModelLocked>' + object.isModelLocked + '</isModelLocked>'}
	${object.modelDescription == null ? '' : '<modelDescription>' + object.modelDescription + '</modelDescription>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}