module.exports = (value) => {
  if (!value) { return ''; }
  if (["Queued","InProgress","Completed","Error"].indexOf(value) < 0) {
    throw new Error('Invalid AsyncRequestState value: ' + value);
  }
  return value;
};