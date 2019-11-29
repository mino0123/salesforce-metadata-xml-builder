module.exports = (value) => {
  if (!value) { return ''; }
  if (["Input","Output"].indexOf(value) < 0) {
    throw new Error('Invalid BotInvocationMappingType value: ' + value);
  }
  return value;
};