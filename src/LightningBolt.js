const LightningBoltCategory = require('./LightningBoltCategory');
const LightningBoltFeatures = require('./LightningBoltFeatures');
const LightningBoltImages = require('./LightningBoltImages');
const LightningBoltItems = require('./LightningBoltItems');

module.exports = (object, asChild) => {
  var rootTagStart = '<LightningBolt>';
  var rootTagEnd = '</LightningBolt>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.category == null ? '' : '<category>' + LightningBoltCategory(object.category, true) + '</category>'}
	${object.lightningBoltFeatures == null ? '' : object.lightningBoltFeatures.map(p => '<lightningBoltFeatures>' + LightningBoltFeatures(p, true) + '</lightningBoltFeatures>').join('')}
	${object.lightningBoltImages == null ? '' : object.lightningBoltImages.map(p => '<lightningBoltImages>' + LightningBoltImages(p, true) + '</lightningBoltImages>').join('')}
	${object.lightningBoltItems == null ? '' : object.lightningBoltItems.map(p => '<lightningBoltItems>' + LightningBoltItems(p, true) + '</lightningBoltItems>').join('')}
	${object.masterLabel == null ? '' : '<masterLabel>' + object.masterLabel + '</masterLabel>'}
	${object.publisher == null ? '' : '<publisher>' + object.publisher + '</publisher>'}
	${object.summary == null ? '' : '<summary>' + object.summary + '</summary>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}