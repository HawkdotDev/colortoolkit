# ColorToolkit

A lightweight, zero-dependency color manipulation toolkit for web applications.

## Features

- **Color Conversion:** Convert between RGB, Hex, and HSL color formats
- **Color Harmonies:** Generate complementary, triadic, and analogous color schemes
- **Shade Generation:** Create pastel, muted, and monochromatic color variations
- **Color Generation:** Generate consistent colors from strings or numbers
- **Predefined Palettes:** Ready-to-use modern and seasonal color palettes
- **Special Effects:** Create gradients, metallic, glow, and vintage effects
- **Zero Dependencies:** Lightweight and efficient with no external dependencies

## Usage

```javascript
import {
  // Color Conversion
  hexToRgb,
  rgbToHex,
  rgbToHsl,
  hslToRgb,
  
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
  seasonalPalettes,
  
  // Shade Generation
  getPastelShade,
  getMutedShade,
  
  // Color Generation
  getColorFromString,
  getColorFromNumber
} from 'colortoolkit';

// Color Conversion
const rgb = hexToRgb('#ff0000');  // { r: 255, g: 0, b: 0 }
const hex = rgbToHex(255, 0, 0);  // '#ff0000'
const hsl = rgbToHsl(255, 0, 0);  // { h: 0, s: 100, l: 50 }

// Color Schemes
const retroColors = getRetroScheme('#ff0000');     // Array of retro-styled colors
const pastelColors = getPastelScheme('#ff0000');   // Array of pastel colors
const neonColors = getNeonScheme('#ff0000');       // Array of neon colors
const earthyColors = getEarthyScheme('#ff0000');   // Array of earth-toned colors

// Color Effects
const gradient = createGradient('#ff0000', '#00ff00', 5);  // Array of gradient colors
const metallic = createMetallicEffect('#ff0000');          // Array of metallic effect colors
const glowing = createGlowEffect('#ff0000');              // Array of glow effect colors
const vintage = createVintageEffect('#ff0000');           // Vintage effect color

// Predefined Palettes
const { vaporwave, cyberpunk } = modernPalettes;
const { spring, summer } = seasonalPalettes;
```

## Future Plans / Roadmap

See [Roadmap](./Roadmap.md) for upcoming features and improvements.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

[MIT](./LICENSE)