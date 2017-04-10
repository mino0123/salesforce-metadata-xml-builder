
module.exports = (object, asChild) => {
  var rootTagStart = '<IntegrationHubSettings>';
  var rootTagEnd = '</IntegrationHubSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.canonicalName == null ? '' : '<canonicalName>' + object.canonicalName + '</canonicalName>'}
	${object.canonicalNameBindingChar == null ? '' : '<canonicalNameBindingChar>' + object.canonicalNameBindingChar + '</canonicalNameBindingChar>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isEnabled == null ? '' : '<isEnabled>' + object.isEnabled + '</isEnabled>'}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.setupData == null ? '' : '<setupData>' + object.setupData + '</setupData>'}
	${object.setupDefinition == null ? '' : '<setupDefinition>' + object.setupDefinition + '</setupDefinition>'}
	${object.setupNamespace == null ? '' : '<setupNamespace>' + object.setupNamespace + '</setupNamespace>'}
	${object.setupSimpleName == null ? '' : '<setupSimpleName>' + object.setupSimpleName + '</setupSimpleName>'}
	${object.uUID == null ? '' : '<uUID>' + object.uUID + '</uUID>'}
	${object.version == null ? '' : '<version>' + object.version + '</version>'}
	${object.versionBuild == null ? '' : '<versionBuild>' + object.versionBuild + '</versionBuild>'}
	${object.versionMajor == null ? '' : '<versionMajor>' + object.versionMajor + '</versionMajor>'}
	${object.versionMinor == null ? '' : '<versionMinor>' + object.versionMinor + '</versionMinor>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}