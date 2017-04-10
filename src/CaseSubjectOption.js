module.exports = (value) => {
  if (!value) { return ''; }
  if (["SocialPostSource","SocialPostContent","BuildCustom"].indexOf(value) < 0) {
    throw new Error('Invalid CaseSubjectOption value: ' + value);
  }
  return value;
};