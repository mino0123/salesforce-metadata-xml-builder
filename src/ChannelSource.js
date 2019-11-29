module.exports = (value) => {
  if (!value) { return ''; }
  if (["Other","Phone","Chat"].indexOf(value) < 0) {
    throw new Error('Invalid ChannelSource value: ' + value);
  }
  return value;
};