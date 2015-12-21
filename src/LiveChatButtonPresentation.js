module.exports = (value) => {
  if (!value) { return ''; }
  if (["Slide","Fade","Appear","Custom"].indexOf(value) < 0) {
    throw new Error('Invalid LiveChatButtonPresentation value: ' + value);
  }
  return value;
};