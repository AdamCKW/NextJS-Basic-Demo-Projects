/**
 * It converts a number to a hexadecimal number.
 * @param c - The color value to convert.
 * @returns A function that takes a parameter c and returns a hexadecimal value.
 */
function componentToHex(c) {
    var hex = c?.toString(16);
    return hex?.length == 1 ? '0' + hex : hex;
}

/**
 * It converts RGB values to Hexadecimal values.
 * @param r - red value
 * @param g - The green component of the color.
 * @param b - The blue value of the color, from 0 to 255.
 * @returns a string.
 */
function rgbToHex(r, g, b) {
    return '#' + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
