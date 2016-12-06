module.exports = (value) => {
  if (!value) { return ''; }
  if (["StartFlow","ResumeFlow"].indexOf(value) < 0) {
    throw new Error('Invalid EventDeliveryType value: ' + value);
  }
  return value;
};