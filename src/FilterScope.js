module.exports = (value) => {
  if (!value) { return ''; }
  if (["Everything","Mine","Queue","Delegated","MyTerritory","MyTeamTerritory","Team","AssignedToMe","MineAndMyGroups"].indexOf(value) < 0) {
    throw new Error('Invalid FilterScope value: ' + value);
  }
  return value;
};