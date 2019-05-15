
// TODO: Add database route
// const dbRoute = "mongodb+srv://admin:admin@ppmm-rtq1u.gcp.mongodb.net/test?retryWrites=true"

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const PORT = 4000;
let Jobs = require('./jobs.model');
let Users = require('./users.model');
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/jobs', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
})
app.listen(PORT, function () {
    console.log("Server is running on Port: " + PORT);
});
const jobsRoutes = express.Router();
app.use('/jobs', jobsRoutes);

const userRoutes = express.Router();
app.use('/users', userRoutes);

userRoutes.route('/').get(function (req, res) {
    Users.find(function (err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

userRoutes.route('/add').post(function (req, res) {
    let users = new Users(req.body);
    console.log("Inside add user endpoint")
    console.log(users);
    users.save()
        .then(users => {
            res.status(200).json({ 'users': 'user added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

userRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Users.findById(id, function (err, users) {
        res.json(users);
    });
});

jobsRoutes.route('/').get(function (req, res) {
    Jobs.find(function (err, jobs) {
        if (err) {
            console.log(err);
        } else {
            res.json(jobs);
        }
    });
});

jobsRoutes.route('/:id').get(function (req, res) {
    let id = req.params.id;
    Jobs.findById(id, function (err, jobs) {
        res.json(jobs);
    });
});

jobsRoutes.route('/add').post(function (req, res) {
    let jobs = new Jobs(req.body);
    jobs.save()
        .then(jobs => {
            res.status(200).json({ 'jobs': 'job added successfully' });
        })
        .catch(err => {
            res.status(400).send('adding new job failed');
        });
});

jobsRoutes.route('/edit/:id').post(function (req, res) {
    Jobs.findById(req.params.id, function (err, jobs) {
        if (!jobs) {
            res.status(404).send('data is not found');
        } else {
            jobs.id = req.body.id;
            jobs.category = req.body.category;
            jobs.city = req.body.city;
            jobs.company_name = req.body.company_name;
            jobs.geo = req.body.geo;
            jobs.job_board = req.body.job_board;
            jobs.job_description = req.body.job_description;
            jobs.job_title = req.body.job_title;
            jobs.job_type = req.body.job_type;
            jobs.post_date = req.body.post_date
            jobs.salary_offered = req.body.salary_offered;
            jobs.state = req.body.state;
            jobs.url = req.body.state;

            jobs.save().then(jobs => {
                res.json('Jobs updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        };
    });
})