module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Indefinite","Definite"].indexOf(value) < 0) {
    throw new Error('Invalid Article value: ' + value);
  }
  return value;
};