const ManageableState = require('./ManageableState');

module.exports = (object, asChild) => {
  var rootTagStart = '<FileProperties>';
  var rootTagEnd = '</FileProperties>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.createdById == null ? '' : '<createdById>' + object.createdById + '</createdById>'}
	${object.createdByName == null ? '' : '<createdByName>' + object.createdByName + '</createdByName>'}
	${object.createdDate == null ? '' : '<createdDate>' + object.createdDate + '</createdDate>'}
	${object.fileName == null ? '' : '<fileName>' + object.fileName + '</fileName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
	${object.id == null ? '' : '<id>' + object.id + '</id>'}
	${object.lastModifiedById == null ? '' : '<lastModifiedById>' + object.lastModifiedById + '</lastModifiedById>'}
	${object.lastModifiedByName == null ? '' : '<lastModifiedByName>' + object.lastModifiedByName + '</lastModifiedByName>'}
	${object.lastModifiedDate == null ? '' : '<lastModifiedDate>' + object.lastModifiedDate + '</lastModifiedDate>'}
	${object.manageableState == null ? '' : '<manageableState>' + ManageableState(object.manageableState, true) + '</manageableState>'}
	${object.namespacePrefix == null ? '' : '<namespacePrefix>' + object.namespacePrefix + '</namespacePrefix>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}