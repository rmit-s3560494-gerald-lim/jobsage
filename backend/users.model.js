const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Users = new Schema({
    user_name: {
        type: String,
    },
    full_name: {
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
module.exports = mongoose.model('Users', Users);