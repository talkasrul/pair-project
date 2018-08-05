module.exports = (password, salt) => {
    const crypto = require('crypto')
    const encript = crypto.createHash('md5').update(password+salt).digest('hex')
    return encript
    // pada update password + cinta
}