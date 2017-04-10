module.exports = (value) => {
  if (!value) { return ''; }
  if (["DisplayText","InputField","LargeTextArea","PasswordField","RadioButtons","DropdownBox","MultiSelectCheckboxes","MultiSelectPicklist","ComponentInstance"].indexOf(value) < 0) {
    throw new Error('Invalid FlowScreenFieldType value: ' + value);
  }
  return value;
};