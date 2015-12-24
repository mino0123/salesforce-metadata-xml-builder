const IpRange = require('./IpRange');

module.exports = (object, asChild) => {
  var rootTagStart = '<NetworkAccess>';
  var rootTagEnd = '</NetworkAccess>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.ipRanges == null ? '' : object.ipRanges.map(p => '<ipRanges>' + IpRange(p, true) + '</ipRanges>').join('')}
${rootTagEnd}`;
}