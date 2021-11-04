/**
 * Salt
 */

/*
- Random value added before it is hashed
- Make it computationally ore expensive to crack with bruteforce
- Used for POW algorithm in crypto
*/

const { scryptSync, randomBytes, timingSafeEqual } = require('crypto')

function signup(email, password) {
  const salt = randomBytes(16).toString('hex')
  const hashedPassword = scryptSync(password, salt, 64)

  const user = { email, password: `${salt}:${hashedPassword}`}
  
  users.push(user)
  return user 
}

function login(email, password) {
  const user = users.find(v => v.email === email)

  const [salt, key] = user.password.split(':')
  const hashedBuffer = scryptSync(password, salt, 64)

  const keyBuffer = Buffer.from(key, 'hex')
  const match = timingSafeEqual(hashedBuffer, keyBuffer)

  if (match) return 'login success!'
  else return 'login fail'
}
