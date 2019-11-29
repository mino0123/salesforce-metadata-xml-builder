module.exports = (value) => {
  if (!value) { return ''; }
  if (["bcpApp","bcpAppMember","bcpEntity","bcpField","bcpMember","bcpParticipant","contentHubItem","conversationeventlog","Datacloud","Datajourney","OpenSearch","Identity","OData","OData4","SfdcOrg","SimpleURL","Wrapper","recommendation","outgoingemail"].indexOf(value) < 0) {
    throw new Error('Invalid ExternalDataSourceType value: ' + value);
  }
  return value;
};