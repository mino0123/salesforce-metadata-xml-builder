module.exports = (value) => {
  if (!value) { return ''; }
  if (["Unrestricted","Restricted"].indexOf(value) < 0) {
    throw new Error('Invalid APIAccessLevel value: ' + value);
  }
  return value;
};