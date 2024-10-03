export function setCookie(name: string, value: string, maxAge = 604800): void {
  document.cookie = `${name}=${value}; max-age=${maxAge}; path=/`
}
