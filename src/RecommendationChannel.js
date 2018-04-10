module.exports = (value) => {
  if (!value) { return ''; }
  if (["DefaultChannel","CustomChannel1","CustomChannel2","CustomChannel3","CustomChannel4","CustomChannel5"].indexOf(value) < 0) {
    throw new Error('Invalid RecommendationChannel value: ' + value);
  }
  return value;
};