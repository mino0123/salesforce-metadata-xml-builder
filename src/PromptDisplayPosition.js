module.exports = (value) => {
  if (!value) { return ''; }
  if (["TopLeft","TopCenter","TopRight","BottomLeft","BottomCenter","BottomRight"].indexOf(value) < 0) {
    throw new Error('Invalid PromptDisplayPosition value: ' + value);
  }
  return value;
};