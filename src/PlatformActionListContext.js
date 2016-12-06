module.exports = (value) => {
  if (!value) { return ''; }
  if (["ListView","RelatedList","ListViewRecord","RelatedListRecord","Record","FeedElement","Chatter","Global","Flexipage","MruList","MruRow","RecordEdit","Photo","BannerPhoto","ObjectHomeChart","ListViewDefinition","Dockable","Lookup","Assistant"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformActionListContext value: ' + value);
  }
  return value;
};