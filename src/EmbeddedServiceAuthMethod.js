module.exports = (value) => {
  if (!value) { return ''; }
  if (["CommunitiesLogin","CustomLogin"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceAuthMethod value: ' + value);
  }
  return value;
};