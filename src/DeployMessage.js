const DeployProblemType = require('./DeployProblemType');

module.exports = (object, asChild) => {
  var rootTagStart = '<DeployMessage>';
  var rootTagEnd = '</DeployMessage>';
  if (asChild) {
    rootTagStart = '';
    rootTagEnd = '';
  }
  return `${rootTagStart}
	${object.changed == null ? '' : '<changed>' + object.changed + '</changed>'}
	${object.columnNumber == null ? '' : '<columnNumber>' + object.columnNumber + '</columnNumber>'}
	${object.componentType == null ? '' : '<componentType>' + object.componentType + '</componentType>'}
	${object.created == null ? '' : '<created>' + object.created + '</created>'}
	${object.createdDate == null ? '' : '<createdDate>' + object.createdDate + '</createdDate>'}
	${object.deleted == null ? '' : '<deleted>' + object.deleted + '</deleted>'}
	${object.fileName == null ? '' : '<fileName>' + object.fileName + '</fileName>'}
	${object.fullName == null ? '' : '<fullName>' + object.fullName + '</fullName>'}
	${object.id == null ? '' : '<id>' + object.id + '</id>'}
	${object.lineNumber == null ? '' : '<lineNumber>' + object.lineNumber + '</lineNumber>'}
	${object.problem == null ? '' : '<problem>' + object.problem + '</problem>'}
	${object.problemType == null ? '' : '<problemType>' + DeployProblemType(object.problemType, true) + '</problemType>'}
	${object.success == null ? '' : '<success>' + object.success + '</success>'}
${rootTagEnd}`;
}