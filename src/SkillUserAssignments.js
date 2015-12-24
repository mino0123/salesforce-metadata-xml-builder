
module.exports = (object, asChild) => {
  var rootTagStart = '<SkillUserAssignments>';
  var rootTagEnd = '</SkillUserAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.user == null ? '' : object.user.map(p => '<user>' + p + '</user>').join('')}
${rootTagEnd}`;
}