const AccessMapping = require('./AccessMapping');

module.exports = (object, asChild) => {
  var rootTagStart = '<SharingSet>';
  var rootTagEnd = '</SharingSet>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessMappings == null ? '' : object.accessMappings.map(p => '<accessMappings>' + AccessMapping(p, true) + '</accessMappings>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.profiles == null ? '' : object.profiles.map(p => '<profiles>' + p + '</profiles>')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}