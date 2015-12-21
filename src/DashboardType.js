module.exports = (value) => {
  if (!value) { return ''; }
  if (["SpecifiedUser","LoggedInUser","MyTeamUser"].indexOf(value) < 0) {
    throw new Error('Invalid DashboardType value: ' + value);
  }
  return value;
};