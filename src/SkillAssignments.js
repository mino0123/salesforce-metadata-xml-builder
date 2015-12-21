const SkillProfileAssignments = require('./SkillProfileAssignments');
const SkillUserAssignments = require('./SkillUserAssignments');

module.exports = (object, asChild) => {
  var rootTagStart = '<SkillAssignments>';
  var rootTagEnd = '</SkillAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profiles == null ? '' : '<profiles>' + SkillProfileAssignments(object.profiles, true) + '</profiles>'}
	${object.users == null ? '' : '<users>' + SkillUserAssignments(object.users, true) + '</users>'}
${rootTagEnd}`;
}