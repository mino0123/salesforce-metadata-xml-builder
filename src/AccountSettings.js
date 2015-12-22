
module.exports = (object, asChild) => {
  var rootTagStart = '<AccountSettings>';
  var rootTagEnd = '</AccountSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableAccountOwnerReport == null ? '' : '<enableAccountOwnerReport>' + object.enableAccountOwnerReport + '</enableAccountOwnerReport>'}
	${object.enableAccountTeams == null ? '' : '<enableAccountTeams>' + object.enableAccountTeams + '</enableAccountTeams>'}
	${object.enableSharedContacts == null ? '' : '<enableSharedContacts>' + object.enableSharedContacts + '</enableSharedContacts>'}
	${object.showViewHierarchyLink == null ? '' : '<showViewHierarchyLink>' + object.showViewHierarchyLink + '</showViewHierarchyLink>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}