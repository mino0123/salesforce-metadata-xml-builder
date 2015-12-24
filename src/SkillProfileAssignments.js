
module.exports = (object, asChild) => {
  var rootTagStart = '<SkillProfileAssignments>';
  var rootTagEnd = '</SkillProfileAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profile == null ? '' : object.profile.map(p => '<profile>' + p + '</profile>').join('')}
${rootTagEnd}`;
}