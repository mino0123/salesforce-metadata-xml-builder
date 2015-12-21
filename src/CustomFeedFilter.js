const FeedFilterCriterion = require('./FeedFilterCriterion');

module.exports = (object, asChild) => {
  var rootTagStart = '<CustomFeedFilter>';
  var rootTagEnd = '</CustomFeedFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.criteria == null ? '' : object.criteria.map(p => '<criteria>' + FeedFilterCriterion(p, true) + '</criteria>')}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.isProtected == null ? '' : '<isProtected>' + object.isProtected + '</isProtected>'}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
${rootTagEnd}`;
}