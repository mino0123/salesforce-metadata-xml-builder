module.exports = (value) => {
  if (!value) { return ''; }
  if (["HTML","URL","Snippet"].indexOf(value) < 0) {
    throw new Error('Invalid SControlContentSource value: ' + value);
  }
  return value;
};