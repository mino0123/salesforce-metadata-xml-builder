const AgentConfigProfileAssignments = require('./AgentConfigProfileAssignments');
const AgentConfigUserAssignments = require('./AgentConfigUserAssignments');

module.exports = (object, asChild) => {
  var rootTagStart = '<AgentConfigAssignments>';
  var rootTagEnd = '</AgentConfigAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profiles == null ? '' : '<profiles>' + AgentConfigProfileAssignments(object.profiles, true) + '</profiles>'}
	${object.users == null ? '' : '<users>' + AgentConfigUserAssignments(object.users, true) + '</users>'}
${rootTagEnd}`;
}