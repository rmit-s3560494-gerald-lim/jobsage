const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let User = new Schema({
    user_id: {
        type: String,
    },
    user_name: {
        type: String,
    },
    password:{
        type: String,
    },
    user_type:{
        type: String,
    },
    skills: [{
        skill1: {
            type: String
        },
        rating1: {
            type: Number
        },
        skill2: {
            type: String
        },
        rating2: {
            type: Number
        },
        skill3: {
            type: String
        },
        rating3: {
            type: Number
        },
        skill4: {
            type: String
        },
        rating4: {
            type: Number
        },
        skill5: {
            type: String
        },
        rating5: {
            type: Number
        },
    }],
},
    {
        versionKey: false
    });
module.exports = mongoose.model('User', User, 'user_users');