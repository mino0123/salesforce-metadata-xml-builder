module.exports = (value) => {
  if (!value) { return ''; }
  if (["Aloha","SFX","SFX_Sample"].indexOf(value) < 0) {
    throw new Error('Invalid EmailTemplateUiType value: ' + value);
  }
  return value;
};