module.exports = (value) => {
  if (!value) { return ''; }
  if (["Equals","NotEquals","IsSet","IsNotSet","GreaterThan","LessThan"].indexOf(value) < 0) {
    throw new Error('Invalid BotStepConditionOperatorType value: ' + value);
  }
  return value;
};