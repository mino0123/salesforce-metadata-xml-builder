
module.exports = (object, asChild) => {
  var rootTagStart = '<HistoryRetentionPolicy>';
  var rootTagEnd = '</HistoryRetentionPolicy>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.archiveAfterMonths == null ? '' : '<archiveAfterMonths>' + object.archiveAfterMonths + '</archiveAfterMonths>'}
	${object.archiveRetentionYears == null ? '' : '<archiveRetentionYears>' + object.archiveRetentionYears + '</archiveRetentionYears>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
${rootTagEnd}`;
}