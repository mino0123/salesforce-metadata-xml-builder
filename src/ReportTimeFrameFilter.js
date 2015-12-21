const UserDateInterval = require('./UserDateInterval');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReportTimeFrameFilter>';
  var rootTagEnd = '</ReportTimeFrameFilter>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.dateColumn == null ? '' : '<dateColumn>' + object.dateColumn + '</dateColumn>'}
	${object.endDate == null ? '' : '<endDate>' + object.endDate + '</endDate>'}
	${object.interval == null ? '' : '<interval>' + UserDateInterval(object.interval, true) + '</interval>'}
	${object.startDate == null ? '' : '<startDate>' + object.startDate + '</startDate>'}
${rootTagEnd}`;
}