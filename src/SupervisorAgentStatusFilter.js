module.exports = (value) => {
  if (!value) { return ''; }
  if (["Online","Away","Offline"].indexOf(value) < 0) {
    throw new Error('Invalid SupervisorAgentStatusFilter value: ' + value);
  }
  return value;
};