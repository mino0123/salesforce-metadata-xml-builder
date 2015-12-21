module.exports = (value) => {
  if (!value) { return ''; }
  if (["Private","Public"].indexOf(value) < 0) {
    throw new Error('Invalid StaticResourceCacheControl value: ' + value);
  }
  return value;
};