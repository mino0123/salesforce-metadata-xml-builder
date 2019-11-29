module.exports = (value) => {
  if (!value) { return ''; }
  if (["DockedComposer","FloatingPanel"].indexOf(value) < 0) {
    throw new Error('Invalid PromptDisplayType value: ' + value);
  }
  return value;
};