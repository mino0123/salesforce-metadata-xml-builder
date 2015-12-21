module.exports = (value) => {
  if (!value) { return ''; }
  if (["CustomerSuccess","Partner","Network"].indexOf(value) < 0) {
    throw new Error('Invalid PortalType value: ' + value);
  }
  return value;
};