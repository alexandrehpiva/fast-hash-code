// Adding options parameter to allow to change the behavior of the function (should be compatible with the first version of the function)
/**
 * Generate a hash from a string, simple and fast.
 * reference: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 * @version 2.0.0
 * @param {string} str Input string
 * @param {Object} options Options
 * @param {boolean} options.forcePositive If true, the hash will be forcePositive.
 * @param {boolean} options.caseSensitive Case sensitive
 * @param {boolean} options.seed Seed for the hash
 */
export function fastHashCode(
  str: string,
  options: {
    forcePositive?: boolean
    caseSensitive?: boolean
    seed?: number
  } = {}
): number {
  const { forcePositive = false, caseSensitive = true, seed = 0 } = options

  if (!caseSensitive) {
    str = str.toLowerCase()
  }

  let hash = seed
  let i
  for (i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0 // Convert to 32bit integer
  }

  if (forcePositive) {
    hash = hash & 0x7fffffff
  }

  return hash
}
