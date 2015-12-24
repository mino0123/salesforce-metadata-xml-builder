
module.exports = (object, asChild) => {
  var rootTagStart = '<LiveChatButtonSkills>';
  var rootTagEnd = '</LiveChatButtonSkills>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.skill == null ? '' : object.skill.map(p => '<skill>' + p + '</skill>').join('')}
${rootTagEnd}`;
}