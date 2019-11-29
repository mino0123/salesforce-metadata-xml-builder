
module.exports = (object, asChild) => {
  var rootTagStart = '<HighVelocitySalesSettings>';
  var rootTagEnd = '</HighVelocitySalesSettings>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.enableDispositionCategory == null ? '' : '<enableDispositionCategory>' + object.enableDispositionCategory + '</enableDispositionCategory>'}
	${object.enableEngagementWaveAnalyticsPref == null ? '' : '<enableEngagementWaveAnalyticsPref>' + object.enableEngagementWaveAnalyticsPref + '</enableEngagementWaveAnalyticsPref>'}
	${object.enableHighVelocitySales == null ? '' : '<enableHighVelocitySales>' + object.enableHighVelocitySales + '</enableHighVelocitySales>'}
	${object.enableHighVelocitySalesSetup == null ? '' : '<enableHighVelocitySalesSetup>' + object.enableHighVelocitySalesSetup + '</enableHighVelocitySalesSetup>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}