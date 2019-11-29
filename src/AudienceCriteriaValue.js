
module.exports = (object, asChild) => {
  var rootTagStart = '<AudienceCriteriaValue>';
  var rootTagEnd = '</AudienceCriteriaValue>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.city == null ? '' : '<city>' + object.city + '</city>'}
	${object.country == null ? '' : '<country>' + object.country + '</country>'}
	${object.domain == null ? '' : '<domain>' + object.domain + '</domain>'}
	${object.entityField == null ? '' : '<entityField>' + object.entityField + '</entityField>'}
	${object.entityType == null ? '' : '<entityType>' + object.entityType + '</entityType>'}
	${object.fieldValue == null ? '' : '<fieldValue>' + object.fieldValue + '</fieldValue>'}
	${object.isEnabled == null ? '' : '<isEnabled>' + object.isEnabled + '</isEnabled>'}
	${object.permissionName == null ? '' : '<permissionName>' + object.permissionName + '</permissionName>'}
	${object.permissionType == null ? '' : '<permissionType>' + object.permissionType + '</permissionType>'}
	${object.profile == null ? '' : '<profile>' + object.profile + '</profile>'}
	${object.subdivision == null ? '' : '<subdivision>' + object.subdivision + '</subdivision>'}
${rootTagEnd}`;
}