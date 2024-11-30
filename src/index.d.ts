export interface RGB {
  r: number;
  g: number;
  b: number;
}

export interface HSL {
  h: number;
  s: number;
  l: number;
}

export interface ColorPalette {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  text: string;
}

// Color Conversion
export function hexToRgb(hex: string): RGB;
export function rgbToHex(r: number, g: number, b: number): string;
export function rgbToHsl(r: number, g: number, b: number): HSL;
export function hslToRgb(h: number, s: number, l: number): RGB;

// Color Harmonies
export function getComplementary(hex: string): string;
export function getTriadic(hex: string): string[];
export function getAnalogous(hex: string): string[];
export function getMonochromatic(hex: string, steps?: number): string[];

// Color Schemes
export function getRetroScheme(hex: string): string[];
export function getPastelScheme(hex: string): string[];
export function getNeonScheme(hex: string): string[];
export function getEarthyScheme(hex: string): string[];

// Color Effects
export function createGradient(startColor: string, endColor: string, steps?: number): string[];
export function createMetallicEffect(hex: string): string[];
export function createGlowEffect(hex: string): string[];
export function createVintageEffect(hex: string): string;

// Shade Generation
export function getPastelShade(hex: string): string;
export function getMutedShade(hex: string): string;

// Color Generation
export function getColorFromString(str: string): string;
export function getColorFromNumber(num: number): string;

// Predefined Palettes
export const modernPalettes: {
  vaporwave: ColorPalette;
  cyberpunk: ColorPalette;
  minimalist: ColorPalette;
  neonNights: ColorPalette;
};

export const seasonalPalettes: {
  spring: ColorPalette;
  summer: ColorPalette;
  autumn: ColorPalette;
  winter: ColorPalette;
};