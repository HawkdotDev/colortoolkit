/**
 * Generate a consistent color based on a string
 * @param {string} str - Input string
 * @returns {string} Hex color code
 */
export function getColorFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  
  const color = '#' + ('00000' + (hash & 0xFFFFFF).toString(16)).slice(-6);
  return color;
}

/**
 * Generate a consistent color based on a number
 * @param {number} num - Input number
 * @returns {string} Hex color code
 */
export function getColorFromNumber(num) {
  const hue = (num * 137.508) % 360;
  return hslToHex(hue, 70, 60);
}

// Helper function to convert HSL to Hex
function hslToHex(h, s, l) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = n => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');
  };
  return `#${f(0)}${f(8)}${f(4)}`;
}