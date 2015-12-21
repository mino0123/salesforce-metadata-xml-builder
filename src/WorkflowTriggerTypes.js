module.exports = (value) => {
  if (!value) { return ''; }
  if (["onCreateOnly","onCreateOrTriggeringUpdate","onAllChanges","OnRecursiveUpdate"].indexOf(value) < 0) {
    throw new Error('Invalid WorkflowTriggerTypes value: ' + value);
  }
  return value;
};