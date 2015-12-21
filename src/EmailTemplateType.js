module.exports = (value) => {
  if (!value) { return ''; }
  if (["text","html","custom","visualforce"].indexOf(value) < 0) {
    throw new Error('Invalid EmailTemplateType value: ' + value);
  }
  return value;
};