module.exports = (value) => {
  if (!value) { return ''; }
  if (["AutoLaunchedFlow","Flow","Workflow","LoginFlow","ActionPlan","JourneyBuilderIntegration","UserProvisioningFlow"].indexOf(value) < 0) {
    throw new Error('Invalid FlowProcessType value: ' + value);
  }
  return value;
};