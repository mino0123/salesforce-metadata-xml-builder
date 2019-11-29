module.exports = (value) => {
  if (!value) { return ''; }
  if (["LEAST_ACTIVE","MOST_AVAILABLE","EXTERNAL_ROUTING"].indexOf(value) < 0) {
    throw new Error('Invalid RoutingModel value: ' + value);
  }
  return value;
};