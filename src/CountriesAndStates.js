const Country = require('./Country');

module.exports = (object, asChild) => {
  var rootTagStart = '<CountriesAndStates>';
  var rootTagEnd = '</CountriesAndStates>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.countries == null ? '' : object.countries.map(p => '<countries>' + Country(p, true) + '</countries>')}
${rootTagEnd}`;
}