const LwcResources = require('./LwcResources');
const Targets = require('./Targets');

module.exports = (object, asChild) => {
  var rootTagStart = '<LightningComponentBundle>';
  var rootTagEnd = '</LightningComponentBundle>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isExplicitImport == null ? '' : '<isExplicitImport>' + object.isExplicitImport + '</isExplicitImport>'}
	${object.isExposed == null ? '' : '<isExposed>' + object.isExposed + '</isExposed>'}
	${object.lwcResources == null ? '' : '<lwcResources>' + LwcResources(object.lwcResources, true) + '</lwcResources>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.runtimeNamespace == null ? '' : '<runtimeNamespace>' + object.runtimeNamespace + '</runtimeNamespace>'}
	${object.targetConfigs == null ? '' : '<targetConfigs>' + object.targetConfigs + '</targetConfigs>'}
	${object.targets == null ? '' : '<targets>' + Targets(object.targets, true) + '</targets>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}