module.exports = (value) => {
  if (!value) { return ''; }
  if (["text","number","picklist"].indexOf(value) < 0) {
    throw new Error('Invalid ReportBucketFieldType value: ' + value);
  }
  return value;
};