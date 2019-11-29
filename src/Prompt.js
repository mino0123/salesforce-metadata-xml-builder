const PromptVersion = require('./PromptVersion');

module.exports = (object, asChild) => {
  var rootTagStart = '<Prompt>';
  var rootTagEnd = '</Prompt>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.promptVersions == null ? '' : object.promptVersions.map(p => '<promptVersions>' + PromptVersion(p, true) + '</promptVersions>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}