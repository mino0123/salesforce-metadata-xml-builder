module.exports = (value) => {
  if (!value) { return ''; }
  if (["newWindow","sidebar","noSidebar","replace","onClickJavaScript"].indexOf(value) < 0) {
    throw new Error('Invalid WebLinkWindowType value: ' + value);
  }
  return value;
};