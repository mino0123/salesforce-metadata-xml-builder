module.exports = (value) => {
  if (!value) { return ''; }
  if (["HideShare","HideHeader","PersonalEnabled"].indexOf(value) < 0) {
    throw new Error('Invalid CanvasOptions value: ' + value);
  }
  return value;
};