
module.exports = (object, asChild) => {
  var rootTagStart = '<DocumentFolder>';
  var rootTagEnd = '</DocumentFolder>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}

${rootTagEnd}`;
}