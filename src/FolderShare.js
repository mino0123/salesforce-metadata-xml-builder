const FolderShareAccessLevel = require('./FolderShareAccessLevel');
const FolderSharedToType = require('./FolderSharedToType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FolderShare>';
  var rootTagEnd = '</FolderShare>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessLevel == null ? '' : '<accessLevel>' + FolderShareAccessLevel(object.accessLevel, true) + '</accessLevel>'}
	${object.sharedTo == null ? '' : '<sharedTo>' + object.sharedTo + '</sharedTo>'}
	${object.sharedToType == null ? '' : '<sharedToType>' + FolderSharedToType(object.sharedToType, true) + '</sharedToType>'}
${rootTagEnd}`;
}