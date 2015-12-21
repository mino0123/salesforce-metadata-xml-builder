module.exports = (value) => {
  if (!value) { return ''; }
  if (["TopLeft","Top","TopRight","Left","Center","Right","BottomLeft","Bottom","BottomRight"].indexOf(value) < 0) {
    throw new Error('Invalid LiveChatButtonInviteEndPosition value: ' + value);
  }
  return value;
};