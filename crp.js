const crypto = require('crypto')

let bahan = "KucinG"

let cinta  = "andrean"

const encrippp = crypto.createHash('md5').update(bahan+cinta).digest('hex')
console.log(encrippp)

// pada update password + cinta