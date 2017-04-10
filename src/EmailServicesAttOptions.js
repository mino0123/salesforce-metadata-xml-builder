module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","TextOnly","BinaryOnly","All","NoContent"].indexOf(value) < 0) {
    throw new Error('Invalid EmailServicesAttOptions value: ' + value);
  }
  return value;
};