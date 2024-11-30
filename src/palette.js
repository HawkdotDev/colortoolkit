import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from './converters.js';

/**
 * Generate a complementary color
 * @param {string} hex - Base color in hex
 * @returns {string} Complementary color in hex
 */
export function getComplementary(hex) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  const newHue = (h + 180) % 360;
  const { r: r2, g: g2, b: b2 } = hslToRgb(newHue, s, l);
  return rgbToHex(r2, g2, b2);
}

/**
 * Generate a triadic color scheme
 * @param {string} hex - Base color in hex
 * @returns {string[]} Array of three hex colors
 */
export function getTriadic(hex) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  
  const colors = [
    hex,
    rgbToHex(...Object.values(hslToRgb((h + 120) % 360, s, l))),
    rgbToHex(...Object.values(hslToRgb((h + 240) % 360, s, l)))
  ];
  
  return colors;
}

/**
 * Generate an analogous color scheme
 * @param {string} hex - Base color in hex
 * @returns {string[]} Array of three hex colors
 */
export function getAnalogous(hex) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  
  const colors = [
    rgbToHex(...Object.values(hslToRgb((h - 30 + 360) % 360, s, l))),
    hex,
    rgbToHex(...Object.values(hslToRgb((h + 30) % 360, s, l)))
  ];
  
  return colors;
}

/**
 * Generate a monochromatic color scheme
 * @param {string} hex - Base color in hex
 * @param {number} steps - Number of colors to generate
 * @returns {string[]} Array of hex colors
 */
export function getMonochromatic(hex, steps = 5) {
  const { r, g, b } = hexToRgb(hex);
  const { h, s, l } = rgbToHsl(r, g, b);
  
  const colors = [];
  const increment = 100 / (steps - 1);
  
  for (let i = 0; i < steps; i++) {
    const newL = Math.min(Math.max(increment * i, 0), 100);
    const { r: r2, g: g2, b: b2 } = hslToRgb(h, s, newL);
    colors.push(rgbToHex(r2, g2, b2));
  }
  
  return colors;
}