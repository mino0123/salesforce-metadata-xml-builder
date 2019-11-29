module.exports = (value) => {
  if (!value) { return ''; }
  if (["LinkId","AwsVpcEndpointId","AwsVpcEndpointServiceName"].indexOf(value) < 0) {
    throw new Error('Invalid ConnectionPropertyName value: ' + value);
  }
  return value;
};