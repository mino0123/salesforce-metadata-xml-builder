module.exports = (value) => {
  if (!value) { return ''; }
  if (["CustomApexPolicy","CustomConditionBuilderPolicy"].indexOf(value) < 0) {
    throw new Error('Invalid TxnSecurityPolicyType value: ' + value);
  }
  return value;
};