module.exports = (value) => {
  if (!value) { return ''; }
  if (["Creator","Everyone","EveryoneButCreator","Manager","CustomUser","CustomExcludedUser"].indexOf(value) < 0) {
    throw new Error('Invalid ActionLinkUserVisibility value: ' + value);
  }
  return value;
};