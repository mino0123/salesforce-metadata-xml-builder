module.exports = (value) => {
  if (!value) { return ''; }
  if (["SubjectNameId","Attribute"].indexOf(value) < 0) {
    throw new Error('Invalid SamlIdentityLocationType value: ' + value);
  }
  return value;
};