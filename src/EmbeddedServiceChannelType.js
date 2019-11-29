module.exports = (value) => {
  if (!value) { return ''; }
  if (["EmbeddedServiceConfig","MessagingChannel","Phone"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceChannelType value: ' + value);
  }
  return value;
};