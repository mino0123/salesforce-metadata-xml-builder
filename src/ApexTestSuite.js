
module.exports = (object, asChild) => {
  var rootTagStart = '<ApexTestSuite>';
  var rootTagEnd = '</ApexTestSuite>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.testClassName == null ? '' : object.testClassName.map(p => '<testClassName>' + p + '</testClassName>').join('')}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
${rootTagEnd}`;
}