
module.exports = (object, asChild) => {
  var rootTagStart = '<SharingTerritoryRule>';
  var rootTagEnd = '</SharingTerritoryRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}

${rootTagEnd}`;
}