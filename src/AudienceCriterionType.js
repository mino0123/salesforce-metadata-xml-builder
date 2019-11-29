module.exports = (value) => {
  if (!value) { return ''; }
  if (["Default","Profile","FieldBased","GeoLocation","Domain","Permission"].indexOf(value) < 0) {
    throw new Error('Invalid AudienceCriterionType value: ' + value);
  }
  return value;
};