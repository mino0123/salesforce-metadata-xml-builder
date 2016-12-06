module.exports = (value) => {
  if (!value) { return ''; }
  if (["AppPage","ObjectPage","RecordPage","HomePage","MailAppAppPage","CommAppPage","CommObjectPage","CommQuickActionCreatePage","CommRecordPage","CommRelatedListPage","CommSearchResultPage","CommThemeLayoutPage","UtilityBar"].indexOf(value) < 0) {
    throw new Error('Invalid FlexiPageType value: ' + value);
  }
  return value;
};