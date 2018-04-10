const PublicGroups = require('./PublicGroups');
const RoleAndSubordinates = require('./RoleAndSubordinates');
const RoleAndSubordinatesInternal = require('./RoleAndSubordinatesInternal');
const Roles = require('./Roles');
const Users = require('./Users');

module.exports = (object, asChild) => {
  var rootTagStart = '<QueueMembers>';
  var rootTagEnd = '</QueueMembers>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.publicGroups == null ? '' : '<publicGroups>' + PublicGroups(object.publicGroups, true) + '</publicGroups>'}
	${object.roleAndSubordinates == null ? '' : '<roleAndSubordinates>' + RoleAndSubordinates(object.roleAndSubordinates, true) + '</roleAndSubordinates>'}
	${object.roleAndSubordinatesInternal == null ? '' : '<roleAndSubordinatesInternal>' + RoleAndSubordinatesInternal(object.roleAndSubordinatesInternal, true) + '</roleAndSubordinatesInternal>'}
	${object.roles == null ? '' : '<roles>' + Roles(object.roles, true) + '</roles>'}
	${object.users == null ? '' : '<users>' + Users(object.users, true) + '</users>'}
${rootTagEnd}`;
}