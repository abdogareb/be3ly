require('dotenv').config()
module.exports = {
    mongoURI:'mongodb+srv://'+process.env.USER_ID+':'+process.env.USER_KEY+'@cluster0-npil7.mongodb.net/test?retryWrites=true&w=majority',
    secretOrKey: 'verysecretkey'    
}