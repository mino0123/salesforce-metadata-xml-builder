module.exports = (value) => {
  if (!value) { return ''; }
  if (["Exact","FirstName","LastName","CompanyName","Phone","City","Street","Zip","Title"].indexOf(value) < 0) {
    throw new Error('Invalid MatchingMethod value: ' + value);
  }
  return value;
};