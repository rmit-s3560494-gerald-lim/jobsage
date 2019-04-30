"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const chai = require('chai');
const expect = chai.expect;

const timestamp = new Date().getTime();

// unsure why this is needed/can't import
const jobSchema = new Schema({
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
});

const jobs = mongoose.model('Jobs', jobSchema);

describe('Database testing', function() {

    beforeAll(function (done) {
        mongoose.connect('mongodb://127.0.0.1:27017/jobstest', { useNewUrlParser: true });
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'connection error'));
        db.once('open', function() {
            console.log('We are connected to test database');
            done();
        });
    });

    describe('Test database', function() {
        it('should save new job to database', function(done) {
            var testjob = jobs({
                category: "Sales",
                city: "Melbourne",
                company_name: "Mcdog",
                geo: "AU",
                job_board: "seek",
                job_description: "Sample description for testing",
                job_title: "Scammer",
                job_type: "Full Time",
                post_date: `${timestamp}`,
                salary_offered: "$70k base",
                state: "South Melbourne",
                url: "www.google.com"
            });
            testjob.save(done);
        });
        it('should retrieve data from test database', function(done) {
            jobs.find({ job_title: "Scammer" }, (err, job_title) => {
                if(err) {
                    throw err;
                }
                if(job_title.length === 0) {
                    throw new Error("no data");
                }
                done();
            });
        });
    });


    afterAll(function(done) {
        mongoose.connection.db.dropDatabase(function() {
            mongoose.connection.close(done);
        });
    });
});