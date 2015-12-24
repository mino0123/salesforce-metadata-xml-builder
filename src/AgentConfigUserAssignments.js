
module.exports = (object, asChild) => {
  var rootTagStart = '<AgentConfigUserAssignments>';
  var rootTagEnd = '</AgentConfigUserAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.user == null ? '' : object.user.map(p => '<user>' + p + '</user>').join('')}
${rootTagEnd}`;
}