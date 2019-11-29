
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
	${object.channelProgramGroup == null ? '' : object.channelProgramGroup.map(p => '<channelProgramGroup>' + p + '</channelProgramGroup>').join('')}
	${object.channelProgramGroups == null ? '' : object.channelProgramGroups.map(p => '<channelProgramGroups>' + p + '</channelProgramGroups>').join('')}
	${object.group == null ? '' : object.group.map(p => '<group>' + p + '</group>').join('')}
	${object.groups == null ? '' : object.groups.map(p => '<groups>' + p + '</groups>').join('')}
	${object.guestUser == null ? '' : object.guestUser.map(p => '<guestUser>' + p + '</guestUser>').join('')}
	${object.managerSubordinates == null ? '' : object.managerSubordinates.map(p => '<managerSubordinates>' + p + '</managerSubordinates>').join('')}
	${object.managers == null ? '' : object.managers.map(p => '<managers>' + p + '</managers>').join('')}
	${object.portalRole == null ? '' : object.portalRole.map(p => '<portalRole>' + p + '</portalRole>').join('')}
	${object.portalRoleAndSubordinates == null ? '' : object.portalRoleAndSubordinates.map(p => '<portalRoleAndSubordinates>' + p + '</portalRoleAndSubordinates>').join('')}
	${object.queue == null ? '' : object.queue.map(p => '<queue>' + p + '</queue>').join('')}
	${object.role == null ? '' : object.role.map(p => '<role>' + p + '</role>').join('')}
	${object.roleAndSubordinates == null ? '' : object.roleAndSubordinates.map(p => '<roleAndSubordinates>' + p + '</roleAndSubordinates>').join('')}
	${object.roleAndSubordinatesInternal == null ? '' : object.roleAndSubordinatesInternal.map(p => '<roleAndSubordinatesInternal>' + p + '</roleAndSubordinatesInternal>').join('')}
	${object.roles == null ? '' : object.roles.map(p => '<roles>' + p + '</roles>').join('')}
	${object.rolesAndSubordinates == null ? '' : object.rolesAndSubordinates.map(p => '<rolesAndSubordinates>' + p + '</rolesAndSubordinates>').join('')}
	${object.territories == null ? '' : object.territories.map(p => '<territories>' + p + '</territories>').join('')}
	${object.territoriesAndSubordinates == null ? '' : object.territoriesAndSubordinates.map(p => '<territoriesAndSubordinates>' + p + '</territoriesAndSubordinates>').join('')}
	${object.territory == null ? '' : object.territory.map(p => '<territory>' + p + '</territory>').join('')}
	${object.territoryAndSubordinates == null ? '' : object.territoryAndSubordinates.map(p => '<territoryAndSubordinates>' + p + '</territoryAndSubordinates>').join('')}
${rootTagEnd}`;
}