
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
let Test = require('./test.model');
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

const testRoutes = express.Router();
app.use('/test', testRoutes);

testRoutes.post("/putData", (req, res) => {
  let test = new Test();

  const { id, message, skill } = req.body;

  if ((!id && id !== 0) || !message) {
    return res.json({
      success: false,
      error: "INVALID INPUTS"
    });
  }

  test.message = message;
  test.id = id;
  test.skill = skill;
  test.save(err => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true });
  });
});

testRoutes.get("/getData", (req, res) => {
  Test.find({message: "test!"}, (err, test) => {
    if (err) return res.json({ success: false, error: err });
    return res.json({ success: true, data: test });
  });
});


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
    //Jobs.find({"skills.skill1": "test1", job_title: "just a lil" },function (err, jobs) {
    //Jobs.find({skills : {$elemMatch: {skill1: "test1"}}, job_title: "just a lil" },function (err, jobs) {
    //Jobs.find({skills : {skill1: {$all: {"test1"}}},function (err, jobs) {
    //Copy the job seeker profile passing in object and use that"
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
        console.log(req.body.skills[0].skill1);
        console.log(jobs.skills[0].skill1);
        if (!jobs) {
            res.status(404).send('data is not found');
        } else {
            jobs.id = req.body.id;
            jobs.category = req.body.category;
            jobs.city = req.body.city;
            jobs.company_name = req.body.company_name;
            // jobs.geo = req.body.geo;
            // jobs.job_board = req.body.job_board;
            jobs.job_description = req.body.job_description;
            jobs.job_title = req.body.job_title;
            jobs.job_type = req.body.job_type;
            jobs.post_date = req.body.post_date;
            jobs.salary_offered = req.body.salary_offered;
            // jobs.state = req.body.state;
            jobs.skills[0].skill1 = req.body.skills[0].skill1;
            jobs.skills[0].rating1 = req.body.skills[0].rating1;
            jobs.skills[0].skill2 = req.body.skills[0].skill2;
            jobs.skills[0].rating2 = req.body.skills[0].rating2;
            jobs.skills[0].skill3 = req.body.skills[0].skill3;
            jobs.skills[0].rating3 = req.body.skills[0].rating3;
            jobs.skills[0].skill4 = req.body.skills[0].skill4;
            jobs.skills[0].rating4 = req.body.skills[0].rating4;
            jobs.skills[0].skill5 = req.body.skills[0].skill5;
            jobs.skills[0].rating5 = req.body.skills[0].rating5;
            // jobs.url = req.body.url;

            jobs.save().then(jobs => {
                res.json('Jobs updated!');
            })
                .catch(err => {
                    res.status(400).send("Update not possible");
                });
        };
    });
})
