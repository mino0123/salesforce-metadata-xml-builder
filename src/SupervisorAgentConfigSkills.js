
module.exports = (object, asChild) => {
  var rootTagStart = '<SupervisorAgentConfigSkills>';
  var rootTagEnd = '</SupervisorAgentConfigSkills>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.skill == null ? '' : object.skill.map(p => '<skill>' + p + '</skill>').join('')}
${rootTagEnd}`;
}