module.exports = (value) => {
  if (!value) { return ''; }
  if (["adhoc","user","userHierarchyField","relatedUserField","queue"].indexOf(value) < 0) {
    throw new Error('Invalid NextOwnerType value: ' + value);
  }
  return value;
};