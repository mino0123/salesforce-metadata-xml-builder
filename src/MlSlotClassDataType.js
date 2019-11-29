module.exports = (value) => {
  if (!value) { return ''; }
  if (["Text","Number","Boolean","Date","DateTime","Currency"].indexOf(value) < 0) {
    throw new Error('Invalid MlSlotClassDataType value: ' + value);
  }
  return value;
};