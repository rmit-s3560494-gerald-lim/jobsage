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
    geo: {
        type: String
    },
    job_board: {
        type: String
    },
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
    state: {
        type: String
    },
    url: {
        type: String
    }

},
{
    // removes __v field in MongoDB
    versionKey: false
});
module.exports = mongoose.model('Jobs', Jobs);