module.exports = (value) => {
  if (!value) { return ''; }
  if (["Navigation","Invocation","VariableOperation","Message","Wait","Group","SystemMessage","RecordLookup"].indexOf(value) < 0) {
    throw new Error('Invalid BotStepType value: ' + value);
  }
  return value;
};