module.exports = (value) => {
  if (!value) { return ''; }
  if (["Pending","InProgress","Succeeded","Failed"].indexOf(value) < 0) {
    throw new Error('Invalid RetrieveStatus value: ' + value);
  }
  return value;
};