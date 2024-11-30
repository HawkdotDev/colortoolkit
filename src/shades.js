import { hexToRgb, rgbToHex } from './converters.js';

/**
 * Generate a pastel shade of a color
 * @param {string} hex - The base hex color
 * @returns {string} Pastel hex color
 */
export function getPastelShade(hex) {
  const { r, g, b } = hexToRgb(hex);
  const pastelFactor = 0.7;
  
  const pastelR = Math.round(r + (255 - r) * pastelFactor);
  const pastelG = Math.round(g + (255 - g) * pastelFactor);
  const pastelB = Math.round(b + (255 - b) * pastelFactor);
  
  return rgbToHex(pastelR, pastelG, pastelB);
}

/**
 * Generate a muted shade of a color
 * @param {string} hex - The base hex color
 * @returns {string} Muted hex color
 */
export function getMutedShade(hex) {
  const { r, g, b } = hexToRgb(hex);
  const muteFactor = 0.3;
  
  const mutedR = Math.round(r * muteFactor);
  const mutedG = Math.round(g * muteFactor);
  const mutedB = Math.round(b * muteFactor);
  
  return rgbToHex(mutedR, mutedG, mutedB);
}