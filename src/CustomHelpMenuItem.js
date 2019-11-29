
module.exports = (object, asChild) => {
  var rootTagStart = '<CustomHelpMenuItem>';
  var rootTagEnd = '</CustomHelpMenuItem>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.linkUrl == null ? '' : '<linkUrl>' + object.linkUrl + '</linkUrl>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.sortOrder == null ? '' : '<sortOrder>' + object.sortOrder + '</sortOrder>'}
${rootTagEnd}`;
}