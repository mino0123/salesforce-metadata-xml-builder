const PrivateConnectionDirection = require('./PrivateConnectionDirection');
const ExternalConnectionProperty = require('./ExternalConnectionProperty');
const PrivateConnectionStatus = require('./PrivateConnectionStatus');
const PrivateConnectionType = require('./PrivateConnectionType');

module.exports = (object, asChild) => {
  var rootTagStart = '<PrivateConnection>';
  var rootTagEnd = '</PrivateConnection>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.direction == null ? '' : '<direction>' + PrivateConnectionDirection(object.direction, true) + '</direction>'}
	${object.externalConnectionProperties == null ? '' : object.externalConnectionProperties.map(p => '<externalConnectionProperties>' + ExternalConnectionProperty(p, true) + '</externalConnectionProperties>').join('')}
	${object.label == null ? '' : '<label>' + object.label + '</label>'}
	${object.status == null ? '' : '<status>' + PrivateConnectionStatus(object.status, true) + '</status>'}
	${object.type == null ? '' : '<type>' + PrivateConnectionType(object.type, true) + '</type>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}