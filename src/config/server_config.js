const dotenv = require('dotenv');

dotenv.config();


module.exports = {

    PORT: process.env.PORT,
    PASSWORD: process.env.PASSWORD,
    GMAIL: process.env.GMAIL
}