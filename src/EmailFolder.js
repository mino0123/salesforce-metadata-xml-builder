
module.exports = (object, asChild) => {
  var rootTagStart = '<EmailFolder>';
  var rootTagEnd = '</EmailFolder>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}

${rootTagEnd}`;
}