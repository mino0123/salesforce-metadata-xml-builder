const FolderAccessTypes = require('./FolderAccessTypes');
const FolderShare = require('./FolderShare');
const PublicFolderAccess = require('./PublicFolderAccess');
const SharedTo = require('./SharedTo');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmailFolder>';
  var rootTagEnd = '</EmailFolder>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.accessType == null ? '' : '<accessType>' + FolderAccessTypes(object.accessType, true) + '</accessType>'}
	${object.folderShares == null ? '' : object.folderShares.map(p => '<folderShares>' + FolderShare(p, true) + '</folderShares>').join('')}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.publicFolderAccess == null ? '' : '<publicFolderAccess>' + PublicFolderAccess(object.publicFolderAccess, true) + '</publicFolderAccess>'}
	${object.sharedTo == null ? '' : '<sharedTo>' + SharedTo(object.sharedTo, true) + '</sharedTo>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}