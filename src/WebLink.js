const WebLinkAvailability = require('./WebLinkAvailability');
const WebLinkDisplayType = require('./WebLinkDisplayType');
const Encoding = require('./Encoding');
const WebLinkType = require('./WebLinkType');
const WebLinkWindowType = require('./WebLinkWindowType');
const WebLinkPosition = require('./WebLinkPosition');

module.exports = (object, asChild) => {
  var rootTagStart = '<WebLink>';
  var rootTagEnd = '</WebLink>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.availability == null ? '' : '<availability>' + WebLinkAvailability(object.availability, true) + '</availability>'}
	${object.description == null ? '' : '<description>' + object.description + '</description>'}
	${object.displayType == null ? '' : '<displayType>' + WebLinkDisplayType(object.displayType, true) + '</displayType>'}
	${object.encodingKey == null ? '' : '<encodingKey>' + Encoding(object.encodingKey, true) + '</encodingKey>'}
	${object.hasMenubar == null ? '' : '<hasMenubar>' + object.hasMenubar + '</hasMenubar>'}
	${object.hasScrollbars == null ? '' : '<hasScrollbars>' + object.hasScrollbars + '</hasScrollbars>'}
	${object.hasToolbar == null ? '' : '<hasToolbar>' + object.hasToolbar + '</hasToolbar>'}
	${object.height == null ? '' : '<height>' + object.height + '</height>'}
	${object.isResizable == null ? '' : '<isResizable>' + object.isResizable + '</isResizable>'}
	${object.linkType == null ? '' : '<linkType>' + WebLinkType(object.linkType, true) + '</linkType>'}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.openType == null ? '' : '<openType>' + WebLinkWindowType(object.openType, true) + '</openType>'}
	${object.page == null ? '' : '<page>' + object.page + '</page>'}
	${object.position == null ? '' : '<position>' + WebLinkPosition(object.position, true) + '</position>'}
	${object.protected == null ? '' : '<protected>' + object.protected + '</protected>'}
	${object.requireRowSelection == null ? '' : '<requireRowSelection>' + object.requireRowSelection + '</requireRowSelection>'}
	${object.scontrol == null ? '' : '<scontrol>' + object.scontrol + '</scontrol>'}
	${object.showsLocation == null ? '' : '<showsLocation>' + object.showsLocation + '</showsLocation>'}
	${object.showsStatus == null ? '' : '<showsStatus>' + object.showsStatus + '</showsStatus>'}
	${object.url == null ? '' : '<url>' + object.url + '</url>'}
	${object.width == null ? '' : '<width>' + object.width + '</width>'}
${rootTagEnd}`;
}