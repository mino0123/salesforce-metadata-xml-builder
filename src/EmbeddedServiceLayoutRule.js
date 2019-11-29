
module.exports = (object, asChild) => {
  var rootTagStart = '<EmbeddedServiceLayoutRule>';
  var rootTagEnd = '</EmbeddedServiceLayoutRule>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.appointmentStatus == null ? '' : '<appointmentStatus>' + object.appointmentStatus + '</appointmentStatus>'}
${rootTagEnd}`;
}