const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 5000;
const Job = require('../../backend/jobs.model');
const mongoose = require('mongoose');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/jobstest', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});

// var mongoose = require('mongoose');
// // use a test database for testing
// var mongoDB = "mongodb://127.0.0.1:27017/jobstest";

// mongoose.connect(mongoDB);
// const Job = require('../../backend/jobs.model');
const timestamp = new Date().getTime();

if (process.env.NODE_ENV !== 'test') {
    app.listen(port);
}


xdescribe("Job model test", () => {
    beforeAll(async () => {
        await Job.remove({});
    });

    afterEach(async () => {
        await Job.remove({});
    });

    afterAll(async () => {
        await connection.close();
    })

    it("has a module", () => {
        expect(Job).toBeDefined();
    });

    describe("get job", () => {
        test("gets a job", async () => {
            const job = new Job({
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
            })
            await job.save();

            const foundJob = await Job.findOne({ job_title: "Scammer" });
            const expected = "Scammer";
            const actual = foundJob.job_title;
            expect(actual).toEqual(expected);
        });
    });
})