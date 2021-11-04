/**
 * Hashing
 */

/*
- Some methods: md5 (deprecated), sha, argon2
- Hash alone is not good enough because hackers can check against rainbow table
*/

const { createHash } = require('crypto')

// Create a string hash

function hash(input) {
  // hex = 7ad584e61a22
  // base64 = etWE/eWT=
  return createHash('sha256').update(input).digest('hex') // digest == output
}

// Compare two hashed passwords
let password1 = 'password123'
const hash1 = hash(password1)
console.log(hash1)

let password2 = 'password123'
const hash2 = hash(password2)
console.log(hash2)

const match = hash1 == hash2 
console.log(match ? '✔️  good password' : '❌  password does not match')