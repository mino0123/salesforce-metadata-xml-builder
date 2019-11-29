
module.exports = (object, asChild) => {
  var rootTagStart = '<PresenceConfigProfileAssignments>';
  var rootTagEnd = '</PresenceConfigProfileAssignments>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.profile == null ? '' : object.profile.map(p => '<profile>' + p + '</profile>').join('')}
${rootTagEnd}`;
}