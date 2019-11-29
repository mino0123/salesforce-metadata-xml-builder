module.exports = (value) => {
  if (!value) { return ''; }
  if (["Active","Draft","Obsolete","InvalidDraft"].indexOf(value) < 0) {
    throw new Error('Invalid FlowVersionStatus value: ' + value);
  }
  return value;
};