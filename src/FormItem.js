
module.exports = (object, asChild) => {
  var rootTagStart = '<FormItem>';
  var rootTagEnd = '</FormItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.emptySpace == null ? '' : '<emptySpace>' + object.emptySpace + '</emptySpace>'}
	${object.expression == null ? '' : '<expression>' + object.expression + '</expression>'}
	${object.formLayoutableItem == null ? '' : '<formLayoutableItem>' + object.formLayoutableItem + '</formLayoutableItem>'}
	${object.helpText == null ? '' : '<helpText>' + object.helpText + '</helpText>'}
${rootTagEnd}`;
}