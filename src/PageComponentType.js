module.exports = (value) => {
  if (!value) { return ''; }
  if (["links","htmlArea","imageOrNote","visualforcePage"].indexOf(value) < 0) {
    throw new Error('Invalid PageComponentType value: ' + value);
  }
  return value;
};