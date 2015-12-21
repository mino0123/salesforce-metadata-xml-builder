module.exports = (value) => {
  if (!value) { return ''; }
  if (["NoAuthentication","Oauth","Password"].indexOf(value) < 0) {
    throw new Error('Invalid AuthenticationProtocol value: ' + value);
  }
  return value;
};