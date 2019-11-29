module.exports = (value) => {
  if (!value) { return ''; }
  if (["Inbound","Outbound"].indexOf(value) < 0) {
    throw new Error('Invalid PrivateConnectionDirection value: ' + value);
  }
  return value;
};