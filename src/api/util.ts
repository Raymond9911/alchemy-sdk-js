/**
 * Converts a hex string to a decimal number.
 *
 * @param hexString - The hex string to convert.
 * @public
 */
export function fromHex(hexString: string): number {
  return Number(BigInt(hexString));
}

/**
 * Converts a number to a hex string.
 *
 * @param num - The number to convert to hex.
 * @public
 */
export function toHex(num: number): string {
  return '0x' + BigInt(num).toString(16);
}

/**
 * Checks if a value is a hex string.
 *
 * @param possibleHexString - The value to check.
 * @public
 */
export function isHex(possibleHexString: string): boolean {
  return /^0x[0-9a-fA-F]+$/.test(possibleHexString);
}
