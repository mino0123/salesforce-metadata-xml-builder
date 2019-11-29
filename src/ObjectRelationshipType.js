module.exports = (value) => {
  if (!value) { return ''; }
  if (["Direct","Indirect","Self"].indexOf(value) < 0) {
    throw new Error('Invalid ObjectRelationshipType value: ' + value);
  }
  return value;
};