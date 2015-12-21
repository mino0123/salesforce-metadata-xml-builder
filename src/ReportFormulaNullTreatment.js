module.exports = (value) => {
  if (!value) { return ''; }
  if (["n","z"].indexOf(value) < 0) {
    throw new Error('Invalid ReportFormulaNullTreatment value: ' + value);
  }
  return value;
};