const FlexiPageRegion = require('./FlexiPageRegion');
const PlatformActionList = require('./PlatformActionList');
const QuickActionList = require('./QuickActionList');
const FlexiPageType = require('./FlexiPageType');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlexiPage>';
  var rootTagEnd = '</FlexiPage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.flexiPageRegions == null ? '' : object.flexiPageRegions.map(p => '<flexiPageRegions>' + FlexiPageRegion(p, true) + '</flexiPageRegions>')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.pageTemplate == null ? '' : '<pageTemplate>' + object.pageTemplate + '</pageTemplate>'}
	${object.parentFlexiPage == null ? '' : '<parentFlexiPage>' + object.parentFlexiPage + '</parentFlexiPage>'}
	${object.platformActionlist == null ? '' : '<platformActionlist>' + PlatformActionList(object.platformActionlist, true) + '</platformActionlist>'}
	${object.quickActionList == null ? '' : '<quickActionList>' + QuickActionList(object.quickActionList, true) + '</quickActionList>'}
	${object.sobjectType == null ? '' : '<sobjectType>' + object.sobjectType + '</sobjectType>'}
	${object.type == null ? '' : '<type>' + FlexiPageType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}