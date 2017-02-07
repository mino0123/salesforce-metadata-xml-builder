module.exports = (value) => {
  if (!value) { return ''; }
  if (["AppPage","ObjectPage","RecordPage","HomePage","MailAppAppPage","CommAppPage","CommForgotPasswordPage","CommLoginPage","CommObjectPage","CommQuickActionCreatePage","CommRecordPage","CommRelatedListPage","CommSearchResultPage","CommSelfRegisterPage","CommThemeLayoutPage","UtilityBar","RecordPreview"].indexOf(value) < 0) {
    throw new Error('Invalid FlexiPageType value: ' + value);
  }
  return value;
};