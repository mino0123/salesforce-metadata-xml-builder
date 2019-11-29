const ChannelSource = require('./ChannelSource');
const RecordActionDefaultItem = require('./RecordActionDefaultItem');

module.exports = (object, asChild) => {
  var rootTagStart = '<RecordActionDeploymentChannel>';
  var rootTagEnd = '</RecordActionDeploymentChannel>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.channel == null ? '' : '<channel>' + ChannelSource(object.channel, true) + '</channel>'}
	${object.channelItems == null ? '' : object.channelItems.map(p => '<channelItems>' + RecordActionDefaultItem(p, true) + '</channelItems>').join('')}
	${object.isAutopopEnabled == null ? '' : '<isAutopopEnabled>' + object.isAutopopEnabled + '</isAutopopEnabled>'}
${rootTagEnd}`;
}