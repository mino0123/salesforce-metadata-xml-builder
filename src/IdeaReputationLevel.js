
module.exports = (object, asChild) => {
  var rootTagStart = '<IdeaReputationLevel>';
  var rootTagEnd = '</IdeaReputationLevel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.value == null ? '' : '<value>' + object.value + '</value>'}
${rootTagEnd}`;
}