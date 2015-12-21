module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Left","Center","Right"].indexOf(value) < 0) {
    throw new Error('Invalid LetterheadHorizontalAlignment value: ' + value);
  }
  return value;
};