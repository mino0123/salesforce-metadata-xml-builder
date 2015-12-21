module.exports = (value) => {
  if (!value) { return ''; }
  if (["Once","OncePerUser","Unlimited"].indexOf(value) < 0) {
    throw new Error('Invalid ActionLinkExecutionsAllowed value: ' + value);
  }
  return value;
};