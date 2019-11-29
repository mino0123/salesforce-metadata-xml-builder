const PresenceConfigProfileAssignments = require('./PresenceConfigProfileAssignments');
const PresenceConfigUserAssignments = require('./PresenceConfigUserAssignments');

module.exports = (object, asChild) => {
  var rootTagStart = '<PresenceConfigAssignments>';
  var rootTagEnd = '</PresenceConfigAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profiles == null ? '' : '<profiles>' + PresenceConfigProfileAssignments(object.profiles, true) + '</profiles>'}
	${object.users == null ? '' : '<users>' + PresenceConfigUserAssignments(object.users, true) + '</users>'}
${rootTagEnd}`;
}