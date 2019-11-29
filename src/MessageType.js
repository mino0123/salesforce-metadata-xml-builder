module.exports = (value) => {
  if (!value) { return ''; }
  if (["Text","Facebook","Line","GoogleHome","Alexa","Omega","AppleBusinessChat","WeChat","WebChat","WhatsApp","Phone"].indexOf(value) < 0) {
    throw new Error('Invalid MessageType value: ' + value);
  }
  return value;
};