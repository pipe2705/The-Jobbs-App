let express = require("express");
let database = require("./database.js");

let app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  response.send("To see the job listing visit /api/jobs");
});

//
//
// TODO:  ROUTES

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

/*********************************
 *
 *
 * TODO: JobSeeker ROUTES
 *
 */
// get all JobSeekers
app.get("/api/JobSeeker", (req, res) => {
  let getAllJobSeekers = "SELECT * FROM JobSeeker";
  database.all(getAllJobSeekers, (error, results) => {
    if (error) {
      console.log("Get all Job Seekers table failed", error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

//get one Jobseeker

app.get("/api/JobSeeker/:id", (req, res) => {
  let jobSeekerId = req.params.id;
  let getOneJobSeeker = `SELECT * FROM JobSeeker WHERE JobSeeker.oid = ${jobSeekerId}`;
  database.all(getOneJobSeeker, (error, result) => {
    if (error) console.log("could not retrieve the Job Seeker", error);
    else {
      res.status(200).json(result);
    }
  });
});
//create new job seeker

app.post("/api/JobSeeker", (req, res) => {
  let createNewJobSeeker = [
    req.body.name,
    req.body.city_location,
    req.body.profession_id,
    req.body.age,
    req.body.years_of_experience,
    req.body.country_location
  ];
  let insertNewJobSeeker = "INSERT INTO JobSeeker VALUES (?, ?, ?, ?, ?, ?)";
  database.all(insertNewJobSeeker, createNewJobSeeker, (error, rows) => {
    if (error) {
      console.log("Could not add a job seeker", error);
      res.sendStatus(500);
    } else {
      res.status(200).json(rows);
    }
  });
});

//update a job seeker info
//delete job seeker

/*********************************
 *
 *
 * TODO: JOBS ROUTES
 *
 */

// get all Jobs
//get one Job
//create new job
//update a job info
//delete job

/*********************************
 *
 *
 * TODO: PROFESSION ROUTES
 *
 */

// get all professions
//get one profession
//create new profession
//update a profession info
//delete profession

/*********************************
 *
 *
 * TODO: JOIN TABLE ROUTES MANY TO MANY
 *
 */
