const nodemailer = require('nodemailer')

const mailConfig = {
    host: 'smtp.ethereal.email',
    port: 587,
    auth: {
        user: 'brenda.satterfield36@ethereal.email',
        pass: 'k5n4cygvt1RseHbBAv'
    }
}

module.exports = nodemailer.createTransport(mailConfig)
