const mongoose = require('mongoose');
const Schema = mongoose.Schema;
let Jobs = new Schema({
    // _id: {
    //     type: String
    // },
    category: {
        type: String
    },
    city: {
        type: String
    },
    company_name: {
        type: String
    },
    // geo: {
    //     type: String
    // },
    // job_board: {
    //     type: String
    // },
    job_description: {
        type: String
    },
    job_title: {
        type: String
    },
    job_type: {
        type: String
    },
    post_date: {
        type: String
    },
    salary_offered: {
        type: String
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
    // state: {
    //     type: String
    // },
    // url: {
    //     type: String
    // }

},
    {
        // removes __v field in MongoDB
        versionKey: false
    });
module.exports = mongoose.model('Jobs', Jobs);