module.exports = (value) => {
  if (!value) { return ''; }
  if (["Basic","Api","Web","Full","Chatter","CustomApplications","RefreshToken","OpenID","Profile","Email","Address","Phone","OfflineAccess","CustomPermissions","Wave"].indexOf(value) < 0) {
    throw new Error('Invalid ConnectedAppOauthAccessScope value: ' + value);
  }
  return value;
};