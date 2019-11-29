const ManagedContentNodeType = require('./ManagedContentNodeType');

module.exports = (object, asChild) => {
  var rootTagStart = '<ManagedContentType>';
  var rootTagEnd = '</ManagedContentType>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.developerName == null ? '' : '<developerName>' + object.developerName + '</developerName>'}
	${object.managedContentNodeTypes == null ? '' : object.managedContentNodeTypes.map(p => '<managedContentNodeTypes>' + ManagedContentNodeType(p, true) + '</managedContentNodeTypes>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}