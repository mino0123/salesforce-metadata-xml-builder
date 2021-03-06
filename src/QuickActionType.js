module.exports = (value) => {
  if (!value) { return ''; }
  if (["Create","VisualforcePage","Post","SendEmail","LogACall","SocialPost","Canvas","Update","LightningComponent","Flow"].indexOf(value) < 0) {
    throw new Error('Invalid QuickActionType value: ' + value);
  }
  return value;
};