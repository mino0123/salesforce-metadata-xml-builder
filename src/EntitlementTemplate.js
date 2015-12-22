
module.exports = (object, asChild) => {
  var rootTagStart = '<EntitlementTemplate>';
  var rootTagEnd = '</EntitlementTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.businessHours == null ? '' : '<businessHours>' + object.businessHours + '</businessHours>'}
	${object.casesPerEntitlement == null ? '' : '<casesPerEntitlement>' + object.casesPerEntitlement + '</casesPerEntitlement>'}
	${object.entitlementProcess == null ? '' : '<entitlementProcess>' + object.entitlementProcess + '</entitlementProcess>'}
	${object.isPerIncident == null ? '' : '<isPerIncident>' + object.isPerIncident + '</isPerIncident>'}
	${object.term == null ? '' : '<term>' + object.term + '</term>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}