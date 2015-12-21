module.exports = (value) => {
  if (!value) { return ''; }
  if (["EmailToCase","Outlook"].indexOf(value) < 0) {
    throw new Error('Invalid EmailToCaseRoutingAddressType value: ' + value);
  }
  return value;
};