module.exports = (value) => {
  if (!value) { return ''; }
  if (["TopLeft","TopLeftTop","Top","TopRightTop","TopRight","TopRightRight","Right","BottomRightRight","BottomRight","BottomRightBottom","Bottom","BottomLeftBottom","BottomLeft","BottomLeftLeft","Left","TopLeftLeft"].indexOf(value) < 0) {
    throw new Error('Invalid LiveChatButtonInviteStartPosition value: ' + value);
  }
  return value;
};