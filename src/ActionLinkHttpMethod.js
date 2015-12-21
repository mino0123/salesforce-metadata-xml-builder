module.exports = (value) => {
  if (!value) { return ''; }
  if (["HttpDelete","HttpHead","HttpGet","HttpPatch","HttpPost","HttpPut"].indexOf(value) < 0) {
    throw new Error('Invalid ActionLinkHttpMethod value: ' + value);
  }
  return value;
};