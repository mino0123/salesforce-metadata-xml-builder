module.exports = (value) => {
  if (!value) { return ''; }
  if (["User","Queue"].indexOf(value) < 0) {
    throw new Error('Invalid KnowledgeLanguageLookupValueType value: ' + value);
  }
  return value;
};