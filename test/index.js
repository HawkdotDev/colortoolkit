import {
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  getComplementary,
  getTriadic,
  getAnalogous,
  getMonochromatic,
  getPastelShade,
  getMutedShade,
  getColorFromString,
  getColorFromNumber
} from '../src/index.js';

// Test color conversion
console.log('Testing color conversion:');
console.log('Hex to RGB:', hexToRgb('#ff0000'));
console.log('RGB to Hex:', rgbToHex(255, 0, 0));
console.log('RGB to HSL:', rgbToHsl(255, 0, 0));
console.log('HSL to RGB:', hslToRgb(0, 100, 50));

// Test color harmonies
console.log('\nTesting color harmonies:');
console.log('Complementary:', getComplementary('#ff0000'));
console.log('Triadic:', getTriadic('#ff0000'));
console.log('Analogous:', getAnalogous('#ff0000'));
console.log('Monochromatic:', getMonochromatic('#ff0000'));

// Test shade generation
console.log('\nTesting shade generation:');
console.log('Pastel shade:', getPastelShade('#ff0000'));
console.log('Muted shade:', getMutedShade('#ff0000'));

// Test color generation
console.log('\nTesting color generation:');
console.log('Color from string:', getColorFromString('test'));
console.log('Color from number:', getColorFromNumber(42));