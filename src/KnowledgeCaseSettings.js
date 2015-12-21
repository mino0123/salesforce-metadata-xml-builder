const KnowledgeCommunitiesSettings = require('./KnowledgeCommunitiesSettings');
const KnowledgeSitesSettings = require('./KnowledgeSitesSettings');
const KnowledgeCaseEditor = require('./KnowledgeCaseEditor');

module.exports = (object, asChild) => {
  var rootTagStart = '<KnowledgeCaseSettings>';
  var rootTagEnd = '</KnowledgeCaseSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.articlePDFCreationProfile == null ? '' : '<articlePDFCreationProfile>' + object.articlePDFCreationProfile + '</articlePDFCreationProfile>'}
	${object.articlePublicSharingCommunities == null ? '' : '<articlePublicSharingCommunities>' + KnowledgeCommunitiesSettings(object.articlePublicSharingCommunities, true) + '</articlePublicSharingCommunities>'}
	${object.articlePublicSharingSites == null ? '' : '<articlePublicSharingSites>' + KnowledgeSitesSettings(object.articlePublicSharingSites, true) + '</articlePublicSharingSites>'}
	${object.articlePublicSharingSitesChatterAnswers == null ? '' : '<articlePublicSharingSitesChatterAnswers>' + KnowledgeSitesSettings(object.articlePublicSharingSitesChatterAnswers, true) + '</articlePublicSharingSitesChatterAnswers>'}
	${object.assignTo == null ? '' : '<assignTo>' + object.assignTo + '</assignTo>'}
	${object.customizationClass == null ? '' : '<customizationClass>' + object.customizationClass + '</customizationClass>'}
	${object.defaultContributionArticleType == null ? '' : '<defaultContributionArticleType>' + object.defaultContributionArticleType + '</defaultContributionArticleType>'}
	${object.editor == null ? '' : '<editor>' + KnowledgeCaseEditor(object.editor, true) + '</editor>'}
	${object.enableArticleCreation == null ? '' : '<enableArticleCreation>' + object.enableArticleCreation + '</enableArticleCreation>'}
	${object.enableArticlePublicSharingSites == null ? '' : '<enableArticlePublicSharingSites>' + object.enableArticlePublicSharingSites + '</enableArticlePublicSharingSites>'}
	${object.useProfileForPDFCreation == null ? '' : '<useProfileForPDFCreation>' + object.useProfileForPDFCreation + '</useProfileForPDFCreation>'}
${rootTagEnd}`;
}