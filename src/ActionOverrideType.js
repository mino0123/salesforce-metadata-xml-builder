module.exports = (value) => {
  if (!value) { return ''; }
  if (["Default","Standard","Scontrol","Visualforce"].indexOf(value) < 0) {
    throw new Error('Invalid ActionOverrideType value: ' + value);
  }
  return value;
};