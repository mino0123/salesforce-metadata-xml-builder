module.exports = (value) => {
  if (!value) { return ''; }
  if (["UTF-8","ISO-8859-1","Shift_JIS","ISO-2022-JP","EUC-JP","ks_c_5601-1987","Big5","GB2312","Big5-HKSCS","x-SJIS_0213"].indexOf(value) < 0) {
    throw new Error('Invalid Encoding value: ' + value);
  }
  return value;
};