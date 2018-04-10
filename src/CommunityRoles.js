
module.exports = (object, asChild) => {
  var rootTagStart = '<CommunityRoles>';
  var rootTagEnd = '</CommunityRoles>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customerUserRole == null ? '' : '<customerUserRole>' + object.customerUserRole + '</customerUserRole>'}
	${object.employeeUserRole == null ? '' : '<employeeUserRole>' + object.employeeUserRole + '</employeeUserRole>'}
	${object.partnerUserRole == null ? '' : '<partnerUserRole>' + object.partnerUserRole + '</partnerUserRole>'}
${rootTagEnd}`;
}