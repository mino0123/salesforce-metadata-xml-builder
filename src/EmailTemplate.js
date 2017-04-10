const Attachment = require('./Attachment');
const Encoding = require('./Encoding');
const PackageVersion = require('./PackageVersion');
const EmailTemplateStyle = require('./EmailTemplateStyle');
const EmailTemplateType = require('./EmailTemplateType');
const EmailTemplateUiType = require('./EmailTemplateUiType');

module.exports = (object, asChild) => {
  var rootTagStart = '<EmailTemplate>';
  var rootTagEnd = '</EmailTemplate>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.apiVersion == null ? '' : '<apiVersion>' + object.apiVersion + '</apiVersion>'}
	${object.attachedDocuments == null ? '' : object.attachedDocuments.map(p => '<attachedDocuments>' + p + '</attachedDocuments>').join('')}
	${object.attachments == null ? '' : object.attachments.map(p => '<attachments>' + Attachment(p, true) + '</attachments>').join('')}
	${object.available == null ? '' : '<available>' + object.available + '</available>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.encodingKey == null ? '' : '<encodingKey>' + Encoding(object.encodingKey, true) + '</encodingKey>'}
	${object.letterhead == null ? '' : '<letterhead>' + object.letterhead + '</letterhead>'}
	${object.name == null ? '' : '<name>' + object.name + '</name>'}
	${object.packageVersions == null ? '' : object.packageVersions.map(p => '<packageVersions>' + PackageVersion(p, true) + '</packageVersions>').join('')}
	${object.relatedEntityType == null ? '' : '<relatedEntityType>' + object.relatedEntityType + '</relatedEntityType>'}
	${object.style == null ? '' : '<style>' + EmailTemplateStyle(object.style, true) + '</style>'}
	${object.subject == null ? '' : '<subject>' + object.subject + '</subject>'}
	${object.textOnly == null ? '' : '<textOnly>' + object.textOnly + '</textOnly>'}
	${object.type == null ? '' : '<type>' + EmailTemplateType(object.type, true) + '</type>'}
	${object.uiType == null ? '' : '<uiType>' + EmailTemplateUiType(object.uiType, true) + '</uiType>'}
	${object.content == null ? '' : '<content>' + object.content + '</content>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}