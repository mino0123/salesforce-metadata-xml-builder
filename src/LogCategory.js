module.exports = (value) => {
  if (!value) { return ''; }
  if (["Db","Workflow","Validation","Callout","Apex_code","Apex_profiling","Visualforce","System","All"].indexOf(value) < 0) {
    throw new Error('Invalid LogCategory value: ' + value);
  }
  return value;
};