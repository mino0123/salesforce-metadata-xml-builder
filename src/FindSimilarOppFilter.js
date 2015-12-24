
module.exports = (object, asChild) => {
  var rootTagStart = '<FindSimilarOppFilter>';
  var rootTagEnd = '</FindSimilarOppFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.similarOpportunitiesDisplayColumns == null ? '' : object.similarOpportunitiesDisplayColumns.map(p => '<similarOpportunitiesDisplayColumns>' + p + '</similarOpportunitiesDisplayColumns>').join('')}
	${object.similarOpportunitiesMatchFields == null ? '' : object.similarOpportunitiesMatchFields.map(p => '<similarOpportunitiesMatchFields>' + p + '</similarOpportunitiesMatchFields>').join('')}
${rootTagEnd}`;
}