const Metadata = require('./Metadata');

module.exports = (object, asChild) => {
  var rootTagStart = '<ReadResult>';
  var rootTagEnd = '</ReadResult>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.records == null ? '' : object.records.map(p => '<records>' + Metadata(p, true) + '</records>')}
${rootTagEnd}`;
}