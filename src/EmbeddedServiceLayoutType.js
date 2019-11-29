module.exports = (value) => {
  if (!value) { return ''; }
  if (["FS_AppointmentHome"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceLayoutType value: ' + value);
  }
  return value;
};