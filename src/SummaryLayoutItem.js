
module.exports = (object, asChild) => {
  var rootTagStart = '<SummaryLayoutItem>';
  var rootTagEnd = '</SummaryLayoutItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.customLink == null ? '' : '<customLink>' + object.customLink + '</customLink>'}
	${object.field == null ? '' : '<field>' + object.field + '</field>'}
	${object.posX == null ? '' : '<posX>' + object.posX + '</posX>'}
	${object.posY == null ? '' : '<posY>' + object.posY + '</posY>'}
	${object.posZ == null ? '' : '<posZ>' + object.posZ + '</posZ>'}
${rootTagEnd}`;
}