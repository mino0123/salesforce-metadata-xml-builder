
module.exports = (object, asChild) => {
  var rootTagStart = '<DashboardFolder>';
  var rootTagEnd = '</DashboardFolder>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}

${rootTagEnd}`;
}