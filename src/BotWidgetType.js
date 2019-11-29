module.exports = (value) => {
  if (!value) { return ''; }
  if (["Menu","Buttons"].indexOf(value) < 0) {
    throw new Error('Invalid BotWidgetType value: ' + value);
  }
  return value;
};