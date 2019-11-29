
module.exports = (object, asChild) => {
  var rootTagStart = '<PresenceConfigUserAssignments>';
  var rootTagEnd = '</PresenceConfigUserAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.user == null ? '' : object.user.map(p => '<user>' + p + '</user>').join('')}
${rootTagEnd}`;
}