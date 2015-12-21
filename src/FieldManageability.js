module.exports = (value) => {
  if (!value) { return ''; }
  if (["DeveloperControlled","SubscriberControlled","Locked"].indexOf(value) < 0) {
    throw new Error('Invalid FieldManageability value: ' + value);
  }
  return value;
};