module.exports = (value) => {
  if (!value) { return ''; }
  if (["Executive","Manager","Worker","PersonAccount"].indexOf(value) < 0) {
    throw new Error('Invalid PortalRoles value: ' + value);
  }
  return value;
};