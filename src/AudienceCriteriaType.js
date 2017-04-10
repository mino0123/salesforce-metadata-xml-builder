module.exports = (value) => {
  if (!value) { return ''; }
  if (["CustomList","MaxDaysInCommunity"].indexOf(value) < 0) {
    throw new Error('Invalid AudienceCriteriaType value: ' + value);
  }
  return value;
};