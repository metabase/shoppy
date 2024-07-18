/**
 * CSS truncate will hide the vertical overflow of the text, so we should use a JavaScript-based solution instead.
 */
export const truncate = (text: string, maxLength: number) =>
  text.length > maxLength ? text.slice(0, maxLength).trim() + "…" : text
