const LightningMessageField = require('./LightningMessageField');

module.exports = (object, asChild) => {
  var rootTagStart = '<LightningMessageChannel>';
  var rootTagEnd = '</LightningMessageChannel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isExposed == null ? '' : '<isExposed>' + object.isExposed + '</isExposed>'}
	${object.lightningMessageFields == null ? '' : object.lightningMessageFields.map(p => '<lightningMessageFields>' + LightningMessageField(p, true) + '</lightningMessageFields>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}