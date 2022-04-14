import { fastHashCode } from './index'

describe('fastHashCode', () => {
  it('should return the same hash for the same string', () => {
    const str1 = 'Hello World!'
    const str2 = 'Hello World!'
    const hash = fastHashCode(str1)
    expect(hash).toBe(fastHashCode(str2))
  })

  it('should be compatible with the first version of the function', () => {
    const str = 'Hello World!'
    const hash = fastHashCode(str)
    expect(hash).toBe(-969099747)
  })

  it('should return different hash for different string', () => {
    const str1 = 'Hello World!'
    const str2 = 'Hello World'
    const hash1 = fastHashCode(str1)
    const hash2 = fastHashCode(str2)
    expect(hash1).not.toBe(hash2)
  })

  it('should return different hash for different string with different seed', () => {
    const str = 'Hello World!'
    const hash1 = fastHashCode(str, { seed: 123 })
    const hash2 = fastHashCode(str, { seed: 2 })
    expect(hash1).not.toBe(hash2)
  })

  it('should return different hash for different string when changing forcePositive option', () => {
    const str = 'Hello World!'
    const hash1 = fastHashCode(str, { forcePositive: true })
    const hash2 = fastHashCode(str, { forcePositive: false })
    expect(hash1).not.toBe(hash2)
  })

  it('should return different hash for different string when changing caseSensitive option', () => {
    const str = 'Hello World!'
    const hash1 = fastHashCode(str, { caseSensitive: true })
    const hash2 = fastHashCode(str, { caseSensitive: false })
    expect(hash1).not.toBe(hash2)
  })
})
