module.exports = (value) => {
  if (!value) { return ''; }
  if (["AutoLaunchedFlow","Flow","Workflow","CustomEvent","InvocableProcess","LoginFlow","ActionPlan","JourneyBuilderIntegration","UserProvisioningFlow","Survey","Appointments","FSCLending","DigitalForm","FieldServiceMobile","OrchestrationFlow","FieldServiceWeb","TransactionSecurityFlow","ContactRequestFlow","ActionCadenceFlow","ManagedContentFlow","CheckoutFlow","CartAsyncFlow","SalesEntryExperienceFlow","DecisionStudio","Journey"].indexOf(value) < 0) {
    throw new Error('Invalid FlowProcessType value: ' + value);
  }
  return value;
};