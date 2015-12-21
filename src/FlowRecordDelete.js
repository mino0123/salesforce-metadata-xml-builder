const FlowConnector = require('./FlowConnector');
const FlowRecordFilter = require('./FlowRecordFilter');

module.exports = (object, asChild) => {
  var rootTagStart = '<FlowRecordDelete>';
  var rootTagEnd = '</FlowRecordDelete>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.connector == null ? '' : '<connector>' + FlowConnector(object.connector, true) + '</connector>'}
	${object.faultConnector == null ? '' : '<faultConnector>' + FlowConnector(object.faultConnector, true) + '</faultConnector>'}
	${object.filters == null ? '' : object.filters.map(p => '<filters>' + FlowRecordFilter(p, true) + '</filters>')}
	${object.inputReference == null ? '' : '<inputReference>' + object.inputReference + '</inputReference>'}
	${object.object == null ? '' : '<object>' + object.object + '</object>'}
${rootTagEnd}`;
}