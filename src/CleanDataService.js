const CleanRule = require('./CleanRule');

module.exports = (object, asChild) => {
  var rootTagStart = '<CleanDataService>';
  var rootTagEnd = '</CleanDataService>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.cleanRules == null ? '' : object.cleanRules.map(p => '<cleanRules>' + CleanRule(p, true) + '</cleanRules>').join('')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.matchEngine == null ? '' : '<matchEngine>' + object.matchEngine + '</matchEngine>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}