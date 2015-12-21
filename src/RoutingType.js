module.exports = (value) => {
  if (!value) { return ''; }
  if (["Unanimous","FirstResponse"].indexOf(value) < 0) {
    throw new Error('Invalid RoutingType value: ' + value);
  }
  return value;
};