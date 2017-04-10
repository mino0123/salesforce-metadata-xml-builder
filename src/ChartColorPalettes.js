module.exports = (value) => {
  if (!value) { return ''; }
  if (["Default","gray","colorSafe","unity","justice","nightfall","sunrise","bluegrass","tropic","heat","dusk","pond","watermelon","fire","water","earth","accessible"].indexOf(value) < 0) {
    throw new Error('Invalid ChartColorPalettes value: ' + value);
  }
  return value;
};