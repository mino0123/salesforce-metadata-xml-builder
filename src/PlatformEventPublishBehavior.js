module.exports = (value) => {
  if (!value) { return ''; }
  if (["PublishAfterCommit","PublishImmediately"].indexOf(value) < 0) {
    throw new Error('Invalid PlatformEventPublishBehavior value: ' + value);
  }
  return value;
};