module.exports = (value) => {
  if (!value) { return ''; }
  if (["AwsPrivateLink"].indexOf(value) < 0) {
    throw new Error('Invalid PrivateConnectionType value: ' + value);
  }
  return value;
};