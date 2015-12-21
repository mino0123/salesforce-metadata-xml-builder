
module.exports = (object, asChild) => {
  var rootTagStart = '<HomePageLayout>';
  var rootTagEnd = '</HomePageLayout>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.narrowComponents == null ? '' : object.narrowComponents.map(p => '<narrowComponents>' + p + '</narrowComponents>')}
	${object.wideComponents == null ? '' : object.wideComponents.map(p => '<wideComponents>' + p + '</wideComponents>')}
${rootTagEnd}`;
}