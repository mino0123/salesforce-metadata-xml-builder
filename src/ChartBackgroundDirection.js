module.exports = (value) => {
  if (!value) { return ''; }
  if (["TopToBottom","LeftToRight","Diagonal"].indexOf(value) < 0) {
    throw new Error('Invalid ChartBackgroundDirection value: ' + value);
  }
  return value;
};