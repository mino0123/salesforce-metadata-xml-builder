module.exports = (value) => {
  if (!value) { return ''; }
  if (["Datacloud","Identity","OData","OData4","SfdcOrg","Wrapper"].indexOf(value) < 0) {
    throw new Error('Invalid ExternalDataSourceType value: ' + value);
  }
  return value;
};