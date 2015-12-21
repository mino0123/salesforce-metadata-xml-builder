
module.exports = (object, asChild) => {
  var rootTagStart = '<ReportFolder>';
  var rootTagEnd = '</ReportFolder>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}

${rootTagEnd}`;
}