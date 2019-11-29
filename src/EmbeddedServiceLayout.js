const EmbeddedServiceLayoutRule = require('./EmbeddedServiceLayoutRule');
const EmbeddedServiceLayoutType = require('./EmbeddedServiceLayoutType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceLayout>';
  var rootTagEnd = '</EmbeddedServiceLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.embeddedServiceLayoutRules == null ? '' : object.embeddedServiceLayoutRules.map(p => '<embeddedServiceLayoutRules>' + EmbeddedServiceLayoutRule(p, true) + '</embeddedServiceLayoutRules>').join('')}
	${object.layout == null ? '' : '<layout>' + object.layout + '</layout>'}
	${object.layoutType == null ? '' : '<layoutType>' + EmbeddedServiceLayoutType(object.layoutType, true) + '</layoutType>'}
${rootTagEnd}`;
}