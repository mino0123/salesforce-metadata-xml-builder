module.exports = (value) => {
  if (!value) { return ''; }
  if (["TrackedChange","UserStatus","TextPost","AdvancedTextPost","LinkPost","ContentPost","PollPost","RypplePost","ProfileSkillPost","DashboardComponentSnapshot","ApprovalPost","CaseCommentPost","ReplyPost","EmailMessageEvent","CallLogPost","ChangeStatusPost","AttachArticleEvent","MilestoneEvent","ActivityEvent","ChatTranscriptPost","CollaborationGroupCreated","CollaborationGroupUnarchived","SocialPost","QuestionPost","FacebookPost","BasicTemplateFeedItem","CreateRecordEvent","CanvasPost","AnnouncementPost"].indexOf(value) < 0) {
    throw new Error('Invalid FeedItemType value: ' + value);
  }
  return value;
};