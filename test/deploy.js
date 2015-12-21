const jsforce = require('jsforce');
const AdmZip = require('adm-zip');
const metadata = require('../index.js');
const USERNAME = process.env.SF_USERNAME;
const PASSWORD = process.env.SF_PASSWORD;

const conn = new jsforce.Connection();

describe('deploy', function () {
  if (!USERNAME || !PASSWORD) {
    xit('deploy test is called when process.env.SF_USERNAME & process.env.SF_PASSWORD are defined.')
    return;
  }
  it('should success', function (done) {
    const objectXml = metadata.CustomObject({
      fullName: 'TestObject__c',
      label: 'TestObject',
      pluralLabel: 'TestObject',
      nameField: {
        type: 'AutoNumber',
        fullName: 'Name',
        label: 'Name'
      },
      deploymentStatus: 'Deployed',
      sharingModel: 'ReadWrite'
    });
    const packagexml = metadata.Package({
      types: [{
        name: 'CustomObject', members: ['TestObject__c']
      }],
      version: '35.0'
    });
    const zip = new AdmZip();
    zip.addFile("src/package.xml", new Buffer(packagexml));
    zip.addFile("src/objects/TestObject__c.object", new Buffer(objectXml));
    conn
      .login(USERNAME, PASSWORD)
      .then(() => {
        return conn.metadata.deploy(zip.toBuffer()).complete({ details: true });
      })
      .then((res) => {
        if (res.status === 'Succeeded') {
          done();
        } else {
          if (res.details && res.details.componentFailures) {
            console.log(res.details.componentFailures);
            done(res.details.componentFailures);
          } else {
            console.log(res);
            done(res);
          }
        }
      })
      .catch(done);
  });
});
