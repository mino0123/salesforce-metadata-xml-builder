module.exports = (value) => {
  if (!value) { return ''; }
  if (["FL_Flow","FS_NewAppointment","FS_ModifyAppointment","FS_CancelAppointment"].indexOf(value) < 0) {
    throw new Error('Invalid EmbeddedServiceFlowType value: ' + value);
  }
  return value;
};