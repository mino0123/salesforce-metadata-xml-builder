module.exports = (value) => {
  if (!value) { return ''; }
  if (["ProvidedString","Source","MessageType","SocialHandle","SocialNetwork","Sentiment","RealName","Content","PipeSeparator","ColonSeparator","HyphenSeparator"].indexOf(value) < 0) {
    throw new Error('Invalid CaseSubjectParticleType value: ' + value);
  }
  return value;
};