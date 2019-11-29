const ActionOverride = require('./ActionOverride');
const Encoding = require('./Encoding');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomTab>';
  var rootTagEnd = '</CustomTab>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionOverrides == null ? '' : object.actionOverrides.map(p => '<actionOverrides>' + ActionOverride(p, true) + '</actionOverrides>').join('')}
	${object.auraComponent == null ? '' : '<auraComponent>' + object.auraComponent + '</auraComponent>'}
	${object.customObject == null ? '' : '<customObject>' + object.customObject + '</customObject>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.flexiPage == null ? '' : '<flexiPage>' + object.flexiPage + '</flexiPage>'}
	${object.frameHeight == null ? '' : '<frameHeight>' + object.frameHeight + '</frameHeight>'}
	${object.hasSidebar == null ? '' : '<hasSidebar>' + object.hasSidebar + '</hasSidebar>'}
	${object.icon == null ? '' : '<icon>' + object.icon + '</icon>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.lwcComponent == null ? '' : '<lwcComponent>' + object.lwcComponent + '</lwcComponent>'}
	${object.motif == null ? '' : '<motif>' + object.motif + '</motif>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.scontrol == null ? '' : '<scontrol>' + object.scontrol + '</scontrol>'}
	${object.splashPageLink == null ? '' : '<splashPageLink>' + object.splashPageLink + '</splashPageLink>'}
	${object.url == null ? '' : '<url>' + object.url + '</url>'}
	${object.urlEncodingKey == null ? '' : '<urlEncodingKey>' + Encoding(object.urlEncodingKey, true) + '</urlEncodingKey>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}