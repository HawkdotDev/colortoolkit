import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from './converters.js';

/**
 * Generate a retro color scheme
 * @param {string} hex - Base color in hex
 * @returns {string[]} Array of retro-styled colors
 */
export function getRetroScheme(hex) {
  const { h, s, l } = rgbToHsl(...Object.values(hexToRgb(hex)));
  
  return [
    hex,
    rgbToHex(...Object.values(hslToRgb((h + 30) % 360, Math.max(s - 20, 0), l))),
    rgbToHex(...Object.values(hslToRgb((h + 60) % 360, Math.max(s - 40, 0), l))),
    rgbToHex(...Object.values(hslToRgb((h + 90) % 360, Math.max(s - 60, 0), l)))
  ];
}

/**
 * Generate a pastel color scheme
 * @param {string} hex - Base color in hex
 * @returns {string[]} Array of pastel colors
 */
export function getPastelScheme(hex) {
  const { h, s } = rgbToHsl(...Object.values(hexToRgb(hex)));
  
  return [
    rgbToHex(...Object.values(hslToRgb(h, Math.min(s, 50), 85))),
    rgbToHex(...Object.values(hslToRgb((h + 60) % 360, Math.min(s, 50), 85))),
    rgbToHex(...Object.values(hslToRgb((h + 120) % 360, Math.min(s, 50), 85))),
    rgbToHex(...Object.values(hslToRgb((h + 180) % 360, Math.min(s, 50), 85))),
    rgbToHex(...Object.values(hslToRgb((h + 240) % 360, Math.min(s, 50), 85)))
  ];
}

/**
 * Generate a neon color scheme
 * @param {string} hex - Base color in hex
 * @returns {string[]} Array of neon colors
 */
export function getNeonScheme(hex) {
  const { h, s } = rgbToHsl(...Object.values(hexToRgb(hex)));
  
  return [
    rgbToHex(...Object.values(hslToRgb(h, 100, 50))),
    rgbToHex(...Object.values(hslToRgb((h + 90) % 360, 100, 50))),
    rgbToHex(...Object.values(hslToRgb((h + 180) % 360, 100, 50))),
    rgbToHex(...Object.values(hslToRgb((h + 270) % 360, 100, 50)))
  ];
}

/**
 * Generate an earthy color scheme
 * @param {string} hex - Base color in hex
 * @returns {string[]} Array of earth-toned colors
 */
export function getEarthyScheme(hex) {
  const { h, s, l } = rgbToHsl(...Object.values(hexToRgb(hex)));
  
  return [
    hex,
    rgbToHex(...Object.values(hslToRgb((h + 30) % 360, Math.min(s, 60), Math.min(l, 70)))),
    rgbToHex(...Object.values(hslToRgb((h + 60) % 360, Math.min(s, 50), Math.min(l, 60)))),
    rgbToHex(...Object.values(hslToRgb((h + 90) % 360, Math.min(s, 40), Math.min(l, 50))))
  ];
}