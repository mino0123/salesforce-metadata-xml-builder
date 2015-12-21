
module.exports = (object, asChild) => {
  var rootTagStart = '<SharedTo>';
  var rootTagEnd = '</SharedTo>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.allCustomerPortalUsers == null ? '' : '<allCustomerPortalUsers>' + object.allCustomerPortalUsers + '</allCustomerPortalUsers>'}
	${object.allInternalUsers == null ? '' : '<allInternalUsers>' + object.allInternalUsers + '</allInternalUsers>'}
	${object.allPartnerUsers == null ? '' : '<allPartnerUsers>' + object.allPartnerUsers + '</allPartnerUsers>'}
	${object.group == null ? '' : object.group.map(p => '<group>' + p + '</group>')}
	${object.groups == null ? '' : object.groups.map(p => '<groups>' + p + '</groups>')}
	${object.managerSubordinates == null ? '' : object.managerSubordinates.map(p => '<managerSubordinates>' + p + '</managerSubordinates>')}
	${object.managers == null ? '' : object.managers.map(p => '<managers>' + p + '</managers>')}
	${object.portalRole == null ? '' : object.portalRole.map(p => '<portalRole>' + p + '</portalRole>')}
	${object.portalRoleAndSubordinates == null ? '' : object.portalRoleAndSubordinates.map(p => '<portalRoleAndSubordinates>' + p + '</portalRoleAndSubordinates>')}
	${object.queue == null ? '' : object.queue.map(p => '<queue>' + p + '</queue>')}
	${object.role == null ? '' : object.role.map(p => '<role>' + p + '</role>')}
	${object.roleAndSubordinates == null ? '' : object.roleAndSubordinates.map(p => '<roleAndSubordinates>' + p + '</roleAndSubordinates>')}
	${object.roleAndSubordinatesInternal == null ? '' : object.roleAndSubordinatesInternal.map(p => '<roleAndSubordinatesInternal>' + p + '</roleAndSubordinatesInternal>')}
	${object.roles == null ? '' : object.roles.map(p => '<roles>' + p + '</roles>')}
	${object.rolesAndSubordinates == null ? '' : object.rolesAndSubordinates.map(p => '<rolesAndSubordinates>' + p + '</rolesAndSubordinates>')}
	${object.territories == null ? '' : object.territories.map(p => '<territories>' + p + '</territories>')}
	${object.territoriesAndSubordinates == null ? '' : object.territoriesAndSubordinates.map(p => '<territoriesAndSubordinates>' + p + '</territoriesAndSubordinates>')}
	${object.territory == null ? '' : object.territory.map(p => '<territory>' + p + '</territory>')}
	${object.territoryAndSubordinates == null ? '' : object.territoryAndSubordinates.map(p => '<territoryAndSubordinates>' + p + '</territoryAndSubordinates>')}
${rootTagEnd}`;
}