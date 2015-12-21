
module.exports = (object, asChild) => {
  var rootTagStart = '<AgentConfigProfileAssignments>';
  var rootTagEnd = '</AgentConfigProfileAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profile == null ? '' : object.profile.map(p => '<profile>' + p + '</profile>')}
${rootTagEnd}`;
}