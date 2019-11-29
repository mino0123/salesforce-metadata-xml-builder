module.exports = (value) => {
  if (!value) { return ''; }
  if (["Text","Number","Boolean","Object","Date","DateTime","Currency","Id"].indexOf(value) < 0) {
    throw new Error('Invalid ConversationDataType value: ' + value);
  }
  return value;
};