module.exports = (value) => {
  if (!value) { return ''; }
  if (["none","freeForm","formalLetter","promotionRight","promotionLeft","newsletter","products"].indexOf(value) < 0) {
    throw new Error('Invalid EmailTemplateStyle value: ' + value);
  }
  return value;
};