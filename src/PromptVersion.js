const PromptDisplayPosition = require('./PromptDisplayPosition');
const PromptDisplayType = require('./PromptDisplayType');
const UiFormulaRule = require('./UiFormulaRule');
const PromptUserAccess = require('./PromptUserAccess');

module.exports = (object, asChild) => {
  var rootTagStart = '<PromptVersion>';
  var rootTagEnd = '</PromptVersion>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.actionButtonLabel == null ? '' : '<actionButtonLabel>' + object.actionButtonLabel + '</actionButtonLabel>'}
	${object.actionButtonLink == null ? '' : '<actionButtonLink>' + object.actionButtonLink + '</actionButtonLink>'}
	${object.body == null ? '' : '<body>' + object.body + '</body>'}
	${object.customApplication == null ? '' : '<customApplication>' + object.customApplication + '</customApplication>'}
	${object.delayDays == null ? '' : '<delayDays>' + object.delayDays + '</delayDays>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.dismissButtonLabel == null ? '' : '<dismissButtonLabel>' + object.dismissButtonLabel + '</dismissButtonLabel>'}
	${object.displayPosition == null ? '' : '<displayPosition>' + PromptDisplayPosition(object.displayPosition, true) + '</displayPosition>'}
	${object.displayType == null ? '' : '<displayType>' + PromptDisplayType(object.displayType, true) + '</displayType>'}
	${object.endDate == null ? '' : '<endDate>' + object.endDate + '</endDate>'}
	${object.header == null ? '' : '<header>' + object.header + '</header>'}
	${object.indexWithIsPublished == null ? '' : '<indexWithIsPublished>' + object.indexWithIsPublished + '</indexWithIsPublished>'}
	${object.indexWithoutIsPublished == null ? '' : '<indexWithoutIsPublished>' + object.indexWithoutIsPublished + '</indexWithoutIsPublished>'}
	${object.isPublished == null ? '' : '<isPublished>' + object.isPublished + '</isPublished>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.publishedByUser == null ? '' : '<publishedByUser>' + object.publishedByUser + '</publishedByUser>'}
	${object.publishedDate == null ? '' : '<publishedDate>' + object.publishedDate + '</publishedDate>'}
	${object.shouldDisplayActionButton == null ? '' : '<shouldDisplayActionButton>' + object.shouldDisplayActionButton + '</shouldDisplayActionButton>'}
	${object.startDate == null ? '' : '<startDate>' + object.startDate + '</startDate>'}
	${object.targetAppDeveloperName == null ? '' : '<targetAppDeveloperName>' + object.targetAppDeveloperName + '</targetAppDeveloperName>'}
	${object.targetAppNamespacePrefix == null ? '' : '<targetAppNamespacePrefix>' + object.targetAppNamespacePrefix + '</targetAppNamespacePrefix>'}
	${object.targetPageKey1 == null ? '' : '<targetPageKey1>' + object.targetPageKey1 + '</targetPageKey1>'}
	${object.targetPageKey2 == null ? '' : '<targetPageKey2>' + object.targetPageKey2 + '</targetPageKey2>'}
	${object.targetPageType == null ? '' : '<targetPageType>' + object.targetPageType + '</targetPageType>'}
	${object.timesToDisplay == null ? '' : '<timesToDisplay>' + object.timesToDisplay + '</timesToDisplay>'}
	${object.title == null ? '' : '<title>' + object.title + '</title>'}
	${object.uiFormulaRule == null ? '' : '<uiFormulaRule>' + UiFormulaRule(object.uiFormulaRule, true) + '</uiFormulaRule>'}
	${object.userAccess == null ? '' : '<userAccess>' + PromptUserAccess(object.userAccess, true) + '</userAccess>'}
	${object.versionNumber == null ? '' : '<versionNumber>' + object.versionNumber + '</versionNumber>'}
${rootTagEnd}`;
}