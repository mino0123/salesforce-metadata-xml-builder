const ObjectMapping = require('./ObjectMapping');
const VisibleOrRequired = require('./VisibleOrRequired');

module.exports = (object, asChild) => {
  var rootTagStart = '<LeadConvertSettings>';
  var rootTagEnd = '</LeadConvertSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allowOwnerChange == null ? '' : '<allowOwnerChange>' + object.allowOwnerChange + '</allowOwnerChange>'}
	${object.objectMapping == null ? '' : object.objectMapping.map(p => '<objectMapping>' + ObjectMapping(p, true) + '</objectMapping>').join('')}
	${object.opportunityCreationOptions == null ? '' : '<opportunityCreationOptions>' + VisibleOrRequired(object.opportunityCreationOptions, true) + '</opportunityCreationOptions>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}