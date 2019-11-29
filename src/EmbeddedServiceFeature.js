module.exports = (value) => {
  if (!value) { return ''; }
  if (["NotInUse","Base","LiveAgent","FieldService","Flows"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceFeature value: ' + value);
  }
  return value;
};