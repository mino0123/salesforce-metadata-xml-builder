module.exports = (value) => {
  if (!value) { return ''; }
  if (["NoAuthentication","Oauth","Password","AwsSv4","Jwt","JwtExchange"].indexOf(value) < 0) {
    throw new Error('Invalid AuthenticationProtocol value: ' + value);
  }
  return value;
};