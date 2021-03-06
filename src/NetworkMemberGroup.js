
module.exports = (object, asChild) => {
  var rootTagStart = '<NetworkMemberGroup>';
  var rootTagEnd = '</NetworkMemberGroup>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.permissionSet == null ? '' : object.permissionSet.map(p => '<permissionSet>' + p + '</permissionSet>').join('')}
	${object.profile == null ? '' : object.profile.map(p => '<profile>' + p + '</profile>').join('')}
${rootTagEnd}`;
}