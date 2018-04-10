module.exports = (value) => {
  if (!value) { return ''; }
  if (["UseSystemDefault","Bounce","Discard","Requeue"].indexOf(value) < 0) {
    throw new Error('Invalid EmailServicesErrorAction value: ' + value);
  }
  return value;
};