module.exports = (value) => {
  if (!value) { return ''; }
  if (["Standard","Invite"].indexOf(value) < 0) {
    throw new Error('Invalid LiveChatButtonType value: ' + value);
  }
  return value;
};