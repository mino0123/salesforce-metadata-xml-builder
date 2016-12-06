module.exports = (value) => {
  if (!value) { return ''; }
  if (["IT","Marketing","Sales","Service"].indexOf(value) < 0) {
    throw new Error('Invalid CommunityTemplateCategory value: ' + value);
  }
  return value;
};