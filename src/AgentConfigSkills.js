
module.exports = (object, asChild) => {
  var rootTagStart = '<AgentConfigSkills>';
  var rootTagEnd = '</AgentConfigSkills>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.skill == null ? '' : object.skill.map(p => '<skill>' + p + '</skill>').join('')}
${rootTagEnd}`;
}