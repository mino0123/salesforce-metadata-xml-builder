module.exports = (value) => {
  if (!value) { return ''; }
  if (["HelpAndToolLinks","CustomButtons","Following","Followers","CustomLinks","Milestones","Topics","Visualforce"].indexOf(value) < 0) {
    throw new Error('Invalid FeedLayoutComponentType value: ' + value);
  }
  return value;
};