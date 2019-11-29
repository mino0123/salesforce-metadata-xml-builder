module.exports = (value) => {
  if (!value) { return ''; }
  if (["LA_Prechat","LA_Minimized","LA_PlainTextChatMessage"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceCustomComponentType value: ' + value);
  }
  return value;
};