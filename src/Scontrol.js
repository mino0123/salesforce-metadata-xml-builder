const SControlContentSource = require('./SControlContentSource');
const Encoding = require('./Encoding');

module.exports = (object, asChild) => {
  var rootTagStart = '<Scontrol>';
  var rootTagEnd = '</Scontrol>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.contentSource == null ? '' : '<contentSource>' + SControlContentSource(object.contentSource, true) + '</contentSource>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.encodingKey == null ? '' : '<encodingKey>' + Encoding(object.encodingKey, true) + '</encodingKey>'}
	${object.fileContent == null ? '' : '<fileContent>' + object.fileContent + '</fileContent>'}
	${object.fileName == null ? '' : '<fileName>' + object.fileName + '</fileName>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.supportsCaching == null ? '' : '<supportsCaching>' + object.supportsCaching + '</supportsCaching>'}
${rootTagEnd}`;
}