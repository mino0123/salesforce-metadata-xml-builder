const assert = require('assert');
const build = require('../index.js');

describe('buildCustomObject', function () {
  it('should return xml', function () {
    const xml = build.CustomObject({
      fields: [{
        fullName: 'MyField__c',
        label: 'MyField',
        type: 'Text',
        length: 255
      }],
      nameField: {
        displayFormat: '0000000000',
        isNameField: true,
        label: 'Name',
        type: 'AutoNumber'
      }
    });
    assert(xml.indexOf('<nameField>') > -1);
    assert(xml.indexOf('<fullName>MyField__c</fullName>') > -1);
    assert(xml.indexOf('<label>Name</label>') > -1);
    assert(xml.indexOf('<length>255</length>') > -1);
  });
});
