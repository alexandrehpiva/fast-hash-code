[![npm](https://img.shields.io/npm/v/fast-hash-code.svg)](https://www.npmjs.com/package/fast-hash-code) [![npm](https://img.shields.io/npm/dy/fast-hash-code)](https://www.npmjs.com/package/fast-hash-code)

# fast-hash-code

Generate a hash from a string, simple and fast.

# Installation

```
yarn add fast-hash-code
```

# Example

```js
import fastHashCode from 'fast-hash-code'

fastHashCode('Hello World!') // -969099747
```

## Options

- forcePositive (new in v2.0.0)
  **Description**: Force the hash to be positive
  **default**: false
  **note**: The hash generated when true will be different from when false for the same string

  ```js
  import fastHashCode from 'fast-hash-code'

  const hashPositive = fastHashCode('Hello World!', {
    forcePositive: true
  })

  console.log(hashPositive) // 1178383901
  ```

- seed (new in v2.0.0)
  **Description**: Seed the hash, generate a different hash for each seed.
  **default**: `0`

  ```js
  import fastHashCode from 'fast-hash-code'

  const hashSeed = fastHashCode('Hello World!', {
    seed: 123
  })

  console.log(hashSeed) // 1597036056
  ```

- caseSensitive (new in v2.0.0)
  **Description**: Force the hash to be case sensitive
  **default**: true

  ```js
  import fastHashCode from 'fast-hash-code'

  const hashCaseSensitive = fastHashCode('Hello World!', {
    caseSensitive: false
  })

  console.log(hashCaseSensitive) // -217287203
  ```

### References

https://werxltd.com/wp/2010/05/13/javascript-implementation-of-javas-string-hashcode-method/
