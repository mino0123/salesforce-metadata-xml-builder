module.exports = (value) => {
  if (!value) { return ''; }
  if (["AuditTrail","Login","Entity","DataExport","AccessResource"].indexOf(value) < 0) {
    throw new Error('Invalid MonitoredEvents value: ' + value);
  }
  return value;
};