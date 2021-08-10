import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        maxLength: [15, 'Username cannot be more than 15 characters']
    },
    key: {
        type: String,
        required: true
    }

})

module.exports = mongoose.models.User || mongoose.model('User', UserSchema);