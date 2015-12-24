const CustomConsoleComponents = require('./CustomConsoleComponents');
const FeedLayout = require('./FeedLayout');
const LayoutHeader = require('./LayoutHeader');
const LayoutSection = require('./LayoutSection');
const MiniLayout = require('./MiniLayout');
const PlatformActionList = require('./PlatformActionList');
const QuickActionList = require('./QuickActionList');
const RelatedContent = require('./RelatedContent');
const RelatedListItem = require('./RelatedListItem');
const SummaryLayout = require('./SummaryLayout');

module.exports = (object, asChild) => {
  var rootTagStart = '<Layout>';
  var rootTagEnd = '</Layout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customButtons == null ? '' : object.customButtons.map(p => '<customButtons>' + p + '</customButtons>').join('')}
	${object.customConsoleComponents == null ? '' : '<customConsoleComponents>' + CustomConsoleComponents(object.customConsoleComponents, true) + '</customConsoleComponents>'}
	${object.emailDefault == null ? '' : '<emailDefault>' + object.emailDefault + '</emailDefault>'}
	${object.excludeButtons == null ? '' : object.excludeButtons.map(p => '<excludeButtons>' + p + '</excludeButtons>').join('')}
	${object.feedLayout == null ? '' : '<feedLayout>' + FeedLayout(object.feedLayout, true) + '</feedLayout>'}
	${object.headers == null ? '' : object.headers.map(p => '<headers>' + LayoutHeader(p, true) + '</headers>').join('')}
	${object.layoutSections == null ? '' : object.layoutSections.map(p => '<layoutSections>' + LayoutSection(p, true) + '</layoutSections>').join('')}
	${object.miniLayout == null ? '' : '<miniLayout>' + MiniLayout(object.miniLayout, true) + '</miniLayout>'}
	${object.multilineLayoutFields == null ? '' : object.multilineLayoutFields.map(p => '<multilineLayoutFields>' + p + '</multilineLayoutFields>').join('')}
	${object.platformActionList == null ? '' : '<platformActionList>' + PlatformActionList(object.platformActionList, true) + '</platformActionList>'}
	${object.quickActionList == null ? '' : '<quickActionList>' + QuickActionList(object.quickActionList, true) + '</quickActionList>'}
	${object.relatedContent == null ? '' : '<relatedContent>' + RelatedContent(object.relatedContent, true) + '</relatedContent>'}
	${object.relatedLists == null ? '' : object.relatedLists.map(p => '<relatedLists>' + RelatedListItem(p, true) + '</relatedLists>').join('')}
	${object.relatedObjects == null ? '' : object.relatedObjects.map(p => '<relatedObjects>' + p + '</relatedObjects>').join('')}
	${object.runAssignmentRulesDefault == null ? '' : '<runAssignmentRulesDefault>' + object.runAssignmentRulesDefault + '</runAssignmentRulesDefault>'}
	${object.showEmailCheckbox == null ? '' : '<showEmailCheckbox>' + object.showEmailCheckbox + '</showEmailCheckbox>'}
	${object.showHighlightsPanel == null ? '' : '<showHighlightsPanel>' + object.showHighlightsPanel + '</showHighlightsPanel>'}
	${object.showInteractionLogPanel == null ? '' : '<showInteractionLogPanel>' + object.showInteractionLogPanel + '</showInteractionLogPanel>'}
	${object.showKnowledgeComponent == null ? '' : '<showKnowledgeComponent>' + object.showKnowledgeComponent + '</showKnowledgeComponent>'}
	${object.showRunAssignmentRulesCheckbox == null ? '' : '<showRunAssignmentRulesCheckbox>' + object.showRunAssignmentRulesCheckbox + '</showRunAssignmentRulesCheckbox>'}
	${object.showSolutionSection == null ? '' : '<showSolutionSection>' + object.showSolutionSection + '</showSolutionSection>'}
	${object.showSubmitAndAttachButton == null ? '' : '<showSubmitAndAttachButton>' + object.showSubmitAndAttachButton + '</showSubmitAndAttachButton>'}
	${object.summaryLayout == null ? '' : '<summaryLayout>' + SummaryLayout(object.summaryLayout, true) + '</summaryLayout>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}