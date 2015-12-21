module.exports = (value) => {
  if (!value) { return ''; }
  if (["None","Chatter","UserProfile","Visualforce","Aura","Publisher","ChatterFeed","ServiceDesk","OpenCTI","AppLauncher","MobileNav","PageLayout"].indexOf(value) < 0) {
    throw new Error('Invalid CanvasLocationOptions value: ' + value);
  }
  return value;
};