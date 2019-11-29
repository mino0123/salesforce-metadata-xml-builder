module.exports = (value) => {
  if (!value) { return ''; }
  if (["TEXT","MTEXT","RTE","IMG","NAMEFIELD"].indexOf(value) < 0) {
    throw new Error('Invalid MCNodeType value: ' + value);
  }
  return value;
};