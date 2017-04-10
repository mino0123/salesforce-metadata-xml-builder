
module.exports = (object, asChild) => {
  var rootTagStart = '<RoleAndSubordinatesInternal>';
  var rootTagEnd = '</RoleAndSubordinatesInternal>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.roleAndSubordinateInternal == null ? '' : object.roleAndSubordinateInternal.map(p => '<roleAndSubordinateInternal>' + p + '</roleAndSubordinateInternal>').join('')}
${rootTagEnd}`;
}