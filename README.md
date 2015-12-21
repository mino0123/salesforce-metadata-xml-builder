## Usage

```js
const AdmZip = require('adm-zip');
const jsforce = require('jsforce');
const metadata = require('salesforce-metadata-xml-builder');

const objectxml = metadata.CustomObject({
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

const conn = new jsforce.Connection();
conn
  .login('yourusername@example.com', 'yourpassword')
  .then(() => {
    return conn.metadata.deploy(zip.toBuffer()).complete({ details: true });
  })
  .then((res) => {
    console.log(res);
  })
```

## How to build

0. Download metadata wsdl file from your organization, and place as ```./metadata.xml```
0. `npm run build`
