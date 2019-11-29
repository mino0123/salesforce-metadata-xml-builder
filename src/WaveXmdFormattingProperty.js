const WaveXmdFormattingBin = require('./WaveXmdFormattingBin');
const WaveXmdFormattingPredicate = require('./WaveXmdFormattingPredicate');

module.exports = (object, asChild) => {
  var rootTagStart = '<WaveXmdFormattingProperty>';
  var rootTagEnd = '</WaveXmdFormattingProperty>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.formattingBins == null ? '' : object.formattingBins.map(p => '<formattingBins>' + WaveXmdFormattingBin(p, true) + '</formattingBins>').join('')}
	${object.formattingPredicates == null ? '' : object.formattingPredicates.map(p => '<formattingPredicates>' + WaveXmdFormattingPredicate(p, true) + '</formattingPredicates>').join('')}
	${object.property == null ? '' : '<property>' + object.property + '</property>'}
	${object.referenceField == null ? '' : '<referenceField>' + object.referenceField + '</referenceField>'}
	${object.sortIndex == null ? '' : '<sortIndex>' + object.sortIndex + '</sortIndex>'}
	${object.type == null ? '' : '<type>' + object.type + '</type>'}
${rootTagEnd}`;
}