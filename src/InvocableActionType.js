module.exports = (value) => {
  if (!value) { return ''; }
  if (["apex","chatterPost","contentWorkspaceEnableFolders","emailAlert","emailSimple","flow","metricRefresh","quickAction","submit","thanks","thunderResponse"].indexOf(value) < 0) {
    throw new Error('Invalid InvocableActionType value: ' + value);
  }
  return value;
};