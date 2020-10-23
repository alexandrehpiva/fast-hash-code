/**
 * Generate a hash from a string, simple and fast.
 * by: https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
 * @param {string} str Input string
 */
function fastHashCode(str) {
  let hash = 0
  let i
  for (i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i)
    hash |= 0 // Convert to 32bit integer
  }
  return hash
}

export default fastHashCode
