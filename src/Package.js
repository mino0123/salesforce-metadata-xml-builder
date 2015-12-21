const APIAccessLevel = require('./APIAccessLevel');
const ProfileObjectPermissions = require('./ProfileObjectPermissions');
const PackageTypeMembers = require('./PackageTypeMembers');

module.exports = (object, asChild) => {
  var rootTagStart = '<Package>';
  var rootTagEnd = '</Package>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiAccessLevel == null ? '' : '<apiAccessLevel>' + APIAccessLevel(object.apiAccessLevel, true) + '</apiAccessLevel>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.namespacePrefix == null ? '' : '<namespacePrefix>' + object.namespacePrefix + '</namespacePrefix>'}
	${object.objectPermissions == null ? '' : object.objectPermissions.map(p => '<objectPermissions>' + ProfileObjectPermissions(p, true) + '</objectPermissions>')}
	${object.postInstallClass == null ? '' : '<postInstallClass>' + object.postInstallClass + '</postInstallClass>'}
	${object.setupWeblink == null ? '' : '<setupWeblink>' + object.setupWeblink + '</setupWeblink>'}
	${object.types == null ? '' : object.types.map(p => '<types>' + PackageTypeMembers(p, true) + '</types>')}
	${object.uninstallClass == null ? '' : '<uninstallClass>' + object.uninstallClass + '</uninstallClass>'}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
${rootTagEnd}`;
}