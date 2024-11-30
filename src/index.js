import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb } from './converters.js';
import { getPastelShade, getMutedShade } from './shades.js';
import { getColorFromString, getColorFromNumber } from './generator.js';
import { getComplementary, getTriadic, getAnalogous, getMonochromatic } from './palette.js';
import { getRetroScheme, getPastelScheme, getNeonScheme, getEarthyScheme } from './schemes.js';
import { createGradient, createMetallicEffect, createGlowEffect, createVintageEffect } from './effects.js';
import * as modernPalettes from './palettes/modern.js';
import * as seasonalPalettes from './palettes/seasonal.js';

export {
  // Color Conversion
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  
  // Shade Generation
  getPastelShade,
  getMutedShade,
  
  // Color Generation
  getColorFromString,
  getColorFromNumber,
  
  // Color Harmonies
  getComplementary,
  getTriadic,
  getAnalogous,
  getMonochromatic,
  
  // Color Schemes
  getRetroScheme,
  getPastelScheme,
  getNeonScheme,
  getEarthyScheme,
  
  // Color Effects
  createGradient,
  createMetallicEffect,
  createGlowEffect,
  createVintageEffect,
  
  // Predefined Palettes
  modernPalettes,
  seasonalPalettes
};