module.exports = (value) => {
  if (!value) { return ''; }
  if (["StartFlow"].indexOf(value) < 0) {
    throw new Error('Invalid EventDeliveryType value: ' + value);
  }
  return value;
};