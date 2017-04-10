
module.exports = (object, asChild) => {
  var rootTagStart = '<Roles>';
  var rootTagEnd = '</Roles>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.role == null ? '' : object.role.map(p => '<role>' + p + '</role>').join('')}
${rootTagEnd}`;
}