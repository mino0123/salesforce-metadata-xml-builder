module.exports = (value) => {
  if (!value) { return ''; }
  if (["Formula","Literal","Null","NextValue","PreviousValue","LookupValue"].indexOf(value) < 0) {
    throw new Error('Invalid FieldUpdateOperation value: ' + value);
  }
  return value;
};