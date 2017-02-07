module.exports = (value) => {
  if (!value) { return ''; }
  if (["Datajourney","Identity","SimpleURL","Wrapper","outgoingemail"].indexOf(value) < 0) {
    throw new Error('Invalid ExternalDataSourceType value: ' + value);
  }
  return value;
};