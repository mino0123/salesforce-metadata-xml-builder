module.exports = (value) => {
  if (!value) { return ''; }
  if (["TwoColumnsTopToBottom","TwoColumnsLeftToRight","OneColumn","CustomLinks"].indexOf(value) < 0) {
    throw new Error('Invalid LayoutSectionStyle value: ' + value);
  }
  return value;
};