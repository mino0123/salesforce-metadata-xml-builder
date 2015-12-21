const CallCenterSection = require('./CallCenterSection');

module.exports = (object, asChild) => {
  var rootTagStart = '<CallCenter>';
  var rootTagEnd = '</CallCenter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.adapterUrl == null ? '' : '<adapterUrl>' + object.adapterUrl + '</adapterUrl>'}
	${object.customSettings == null ? '' : '<customSettings>' + object.customSettings + '</customSettings>'}
	${object.displayName == null ? '' : '<displayName>' + object.displayName + '</displayName>'}
	${object.displayNameLabel == null ? '' : '<displayNameLabel>' + object.displayNameLabel + '</displayNameLabel>'}
	${object.internalNameLabel == null ? '' : '<internalNameLabel>' + object.internalNameLabel + '</internalNameLabel>'}
	${object.sections == null ? '' : object.sections.map(p => '<sections>' + CallCenterSection(p, true) + '</sections>')}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
${rootTagEnd}`;
}