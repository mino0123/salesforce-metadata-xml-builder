module.exports = (value) => {
  if (!value) { return ''; }
  if (["Siteforce","Visualforce","ChatterNetwork","ChatterNetworkPicasso","User"].indexOf(value) < 0) {
    throw new Error('Invalid SiteType value: ' + value);
  }
  return value;
};