/**
 * Sanitizes the input string by replacing newline characters with spaces and trimming any leading or trailing whitespace.
 *
 * @param input - The string to be sanitized.
 * @returns The sanitized string with newline characters replaced by spaces and trimmed of leading/trailing whitespace.
 */
export function sanitizeString(input: string): string {
  return input.replace(/\n/g, ' ').trim();
}
