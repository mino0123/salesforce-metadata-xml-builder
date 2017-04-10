
module.exports = (object, asChild) => {
  var rootTagStart = '<RoleAndSubordinates>';
  var rootTagEnd = '</RoleAndSubordinates>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.roleAndSubordinate == null ? '' : object.roleAndSubordinate.map(p => '<roleAndSubordinate>' + p + '</roleAndSubordinate>').join('')}
${rootTagEnd}`;
}