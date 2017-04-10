module.exports = (value) => {
  if (!value) { return ''; }
  if (["AutoNumber","Lookup","MasterDetail","Checkbox","Currency","Date","DateTime","Email","Number","Percent","Phone","Picklist","MultiselectPicklist","Text","TextArea","LongTextArea","Html","Url","EncryptedText","Summary","Hierarchy","File","MetadataRelationship","ExternalLookup","IndirectLookup","CustomDataType","Time"].indexOf(value) < 0) {
    throw new Error('Invalid FieldType value: ' + value);
  }
  return value;
};