const SkillAssignments = require('./SkillAssignments');

module.exports = (object, asChild) => {
  var rootTagStart = '<Skill>';
  var rootTagEnd = '</Skill>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.assignments == null ? '' : '<assignments>' + SkillAssignments(object.assignments, true) + '</assignments>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}