module.exports = (value) => {
  if (!value) { return ''; }
  if (["VisibleOptional","VisibleRequired","NotVisible"].indexOf(value) < 0) {
    throw new Error('Invalid VisibleOrRequired value: ' + value);
  }
  return value;
};