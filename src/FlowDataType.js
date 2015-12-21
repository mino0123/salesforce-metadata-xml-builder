module.exports = (value) => {
  if (!value) { return ''; }
  if (["Currency","Date","Number","String","Boolean","SObject","DateTime","Picklist","Multipicklist"].indexOf(value) < 0) {
    throw new Error('Invalid FlowDataType value: ' + value);
  }
  return value;
};