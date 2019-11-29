
module.exports = (object, asChild) => {
  var rootTagStart = '<StrategyActionArg>';
  var rootTagEnd = '</StrategyActionArg>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}