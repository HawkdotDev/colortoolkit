import { hexToRgb, rgbToHex } from './converters.js';

/**
 * Add a gradient effect to a color
 * @param {string} startColor - Starting hex color
 * @param {string} endColor - Ending hex color
 * @param {number} steps - Number of gradient steps
 * @returns {string[]} Array of hex colors forming a gradient
 */
export function createGradient(startColor, endColor, steps = 5) {
  const start = hexToRgb(startColor);
  const end = hexToRgb(endColor);
  const colors = [];

  for (let i = 0; i < steps; i++) {
    const r = Math.round(start.r + (end.r - start.r) * (i / (steps - 1)));
    const g = Math.round(start.g + (end.g - start.g) * (i / (steps - 1)));
    const b = Math.round(start.b + (end.b - start.b) * (i / (steps - 1)));
    colors.push(rgbToHex(r, g, b));
  }

  return colors;
}

/**
 * Create a metallic effect for a color
 * @param {string} hex - Base hex color
 * @returns {string[]} Array of metallic-effect colors
 */
export function createMetallicEffect(hex) {
  const base = hexToRgb(hex);
  const highlight = 40;
  const shadow = 40;

  return [
    rgbToHex(
      Math.min(base.r + highlight, 255),
      Math.min(base.g + highlight, 255),
      Math.min(base.b + highlight, 255)
    ),
    hex,
    rgbToHex(
      Math.max(base.r - shadow, 0),
      Math.max(base.g - shadow, 0),
      Math.max(base.b - shadow, 0)
    )
  ];
}

/**
 * Create a glowing effect for a color
 * @param {string} hex - Base hex color
 * @returns {string[]} Array of glow-effect colors
 */
export function createGlowEffect(hex) {
  const base = hexToRgb(hex);
  const steps = 4;
  const colors = [];

  for (let i = 0; i < steps; i++) {
    const factor = 1 - (i / steps);
    const r = Math.round(255 - (255 - base.r) * factor);
    const g = Math.round(255 - (255 - base.g) * factor);
    const b = Math.round(255 - (255 - base.b) * factor);
    colors.push(rgbToHex(r, g, b));
  }

  return colors;
}

/**
 * Create a vintage effect for a color
 * @param {string} hex - Base hex color
 * @returns {string} Vintage-effect color
 */
export function createVintageEffect(hex) {
  const { r, g, b } = hexToRgb(hex);
  const sepia = {
    r: Math.min(255, (r * 0.393) + (g * 0.769) + (b * 0.189)),
    g: Math.min(255, (r * 0.349) + (g * 0.686) + (b * 0.168)),
    b: Math.min(255, (r * 0.272) + (g * 0.534) + (b * 0.131))
  };
  return rgbToHex(Math.round(sepia.r), Math.round(sepia.g), Math.round(sepia.b));
}