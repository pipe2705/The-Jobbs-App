let express = require("express");
let database = require("./database.js");

let app = express();

app.use(express.json());

const port = 3000;

app.get("/", (req, res) => {
  response.send("To see the job listing visit /api/jobs");
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

app.put("/api/JobSeeker/:id", (req, res) => {
  let jobSeekerId = parseInt(req.params.id);
  let queryHelper = Object.keys(req.body).map(
    ele => `${ele.toUpperCase()} = ?`
  );
  let updateOneJobSeeker = `UPDATE JobSeeker SET ${queryHelper.join(
    ", "
  )} WHERE JobSeeker.oid = ?`;
  let queryValues = [...Object.values(req.body), jobSeekerId];

  database.run(updateOneJobSeeker, queryValues, function(error) {
    if (error) {
      console.log(new Error("Could not update Job Seeker"), error);
      res.sendStatus(500);
    } else {
      console.log(`Job Seeker with ID ${jobSeekerId} was updated successfully`);
      res.sendStatus(200);
    }
  });
});

//delete job seeker

app.delete("/api/JobSeeker/:id", (req, res) => {
  let deleteById = `DELETE FROM JobSeeker WHERE JobSeeker.oid = ?`;
  let jobSeekerId = req.params.id;

  database.run(deleteById, jobSeekerId, error => {
    if (error) {
      res.sendStatus(500);
      console.log("Could not delete Job Seeker", error);
    } else {
      console.log("Job seeker Deleted ");
      res.sendStatus(200);
    }
  });
});

/*******************************************************************************
 *
 * TODO: JOBS ROUTES
 *
 */

// get all Jobs
app.get("/api/Jobs", (req, res) => {
  let getAllJobs = "SELECT * FROM Jobs";
  database.all(getAllJobs, (error, results) => {
    if (error) {
      console.log("Get all Jobs table failed", error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

//get one Job

app.get("/api/Jobs/:id", (req, res) => {
  let jobId = req.params.id;
  let getOneJob = `SELECT * FROM Jobs WHERE jobs.oid = ${jobId}`;
  database.all(getOneJob, (error, result) => {
    if (error) console.log("could not retrieve Job Listing", error);
    else {
      res.status(200).json(result);
    }
  });
});
//create new job
app.post("/api/Jobs", (req, res) => {
  let createNewJob = [
    req.body.position,
    req.body.company,
    req.body.salary,
    req.body.city_location,
    req.body.country_location,
    req.body.profession_id,
    req.body.week_posted,
    req.body.is_fulltime
  ];
  let insertNewJob = "INSERT INTO Jobs VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  database.all(insertNewJob, createNewJob, (error, rows) => {
    if (error) {
      console.log("Could not add a Job to the Jobs Table", error);
      res.sendStatus(500);
    } else {
      res.status(200).json(rows);
    }
  });
});

//update a job info
app.put("/api/Jobs/:id", (req, res) => {
  let jobId = parseInt(req.params.id);
  let queryHelper = Object.keys(req.body).map(
    ele => `${ele.toUpperCase()} = ?`
  );
  let updateOneJob = `UPDATE Jobs SET ${queryHelper.join(
    ", "
  )} WHERE Jobs.oid = ?`;
  let queryValues = [...Object.values(req.body), jobId];

  database.run(updateOneJob, queryValues, function(error) {
    if (error) {
      console.log(new Error("Could not update Job Lising Information"), error);
      res.sendStatus(500);
    } else {
      console.log(`Job with ID ${jobId} was updated successfully`);
      res.sendStatus(200);
    }
  });
});

//delete job

app.delete("/api/Jobs/:id", (req, res) => {
  let deleteByJobId = `DELETE FROM Jobs WHERE Jobs.oid = ?`;
  let jobId = req.param.id;

  database.run(deleteByJobId, jobId, error => {
    if (error) {
      res.sendStatus(500);
      console.log("Could not delete Job listing", error);
    } else {
      console.log("Job Listing Deleted");
      res.sendStatus(200);
    }
  });
});

/*************************************************************************************8
 *
 *
 * TODO: PROFESSION ROUTES
 *
 */

// get all professions

app.get("/api/Profession", (req, res) => {
  let getAllProfessions = "SELECT * FROM Profession";
  database.all(getAllProfessions, (error, results) => {
    if (error) {
      console.log("Get all Professions Table failed", error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});
//get one profession

app.get("/api/Profession/:id", (req, res) => {
  let professionId = req.params.id;
  let getOneProfession = `SELECT * FROM Profession where Profession.oid = ${professionId}`;
  database.all(getOneProfession, (error, results) => {
    if (error) {
      console.log("Could not retrieve Profession", error);
    } else {
      res.status(200).json(results);
    }
  });
});
//create new profession

app.post("/api/Profession", (req, res) => {
  let createNewProfession = [req.body.title, req.body.industry];
  let insertNewProfession = "INSERT INTO Profession VALUES (?, ?)";
  database.all(insertNewProfession, createNewProfession, (error, rows) => {
    if (error) {
      console.log(
        "Could not add a Professions to the Professions Table",
        error
      );
    } else {
      res.status(200).json(rows);
    }
  });
});
//update a profession info\
app.put("/api/Profession/:id", (req, res) => {
  let professionId = parseInt(req.params.id);
  let queryHelper = Object.keys(req.body).map(
    ele => `${ele.toUpperCase()} = ?`
  );
  let updateOneProfession = `UPDATE Profession SET ${queryHelper.join(
    ", "
  )} WHERE Profession.oid = ?`;

  let queryValues = [...Object.values(req.body), professionId];
  database.run(updateOneProfession, queryValues, function(error) {
    if (error) {
      console.log(
        new Error("Could not update the Profession Information"),
        error
      );
      res.sendStatus(500);
    } else {
      console.log(
        `Profession with ID ${professionId} was updated successfully`
      );
      res.sendStatus(200);
    }
  });
});
//delete profession
app.delete("/api/Profession/:id", (req, res) => {
  let deleteProfessionById = `DELETE FROM Profession WHERE Profession.oid = ?`;
  let professionId = req.params.id;

  database.run(deleteProfessionById, professionId, error => {
    if (error) {
      console.log("Could not delete Profession", error);
    } else {
      console.log("Profession Deleted");
      res.sendStatus(200);
    }
  });
});
/**********************************************************************************************
 *
 *
 * TODO: JOIN TABLE ROUTES MANY TO MANY
 *
 */
// Get Job seeker applied to jobs usuing the applicants ID
app.get("api/JobSeeker/:id/Jobs", (req, res) => {
  let applicantId = req.params.id;
  let queryString = " SELECT * FROM Jobs_Applied WHERE applicant_id = ?";

  database.all(queryString, [applicantId], (error, results) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

// Create an association between a JobSeeker and a Job on Jobs_Applied Table

app.post("/api/JobSeeker/:id/Jobs", (req, res) => {
  let applicantId = req.params.id;
  let jobId = req.body.job_id;
  let insertString = "INSERT INTO Jobs_Applied VALUES (?, ?)";

  database.run(insertString, [applicantId, jobId], (error, rows) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.sendStatus(200).json(rows);
    }
  });
});

//get a list of Jobs Applied to by Job Seeker ID

app.get("/api/Jobs_Applied/JobSeeker/:id", (req, res) => {
  let jobSeekerId = req.params.id;
  let queryString = `SELECT applicant_id, job_id FROM Jobs_Applied
JOIN JobSeeker ON JobSeeker.oid = Jobs_Applied.applicant_id
JOIN Jobs ON Jobs.oid = Jobs_Applied.job_id
WHERE JobSeeker.oid = ?`;

  database.all(queryString, [jobSeekerId], (error, results) => {
    if (error) {
      console.log(error);
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

// get a list of Job Seekers who Applied to a Job using the Job Id

app.get("/api/Jobs_Applied/Jobs/:id", (req, res) => {
  let jobId = req.params.id;
  let queryString = `SELECT job_id, applicant_id FROM Jobs_Applied
    JOIN Jobs ON Jobs.oid = Jobs_Applied.job_id
    JOIN JobSeeker ON JobSeeker.oid = Jobs_Applied.applicant_id
    WHERE Jobs.oid = ?`;

  database.all(queryString, [jobId], (error, results) => {
    if (error) {
      console.log(
        "could not retrieve list of job seekers per job applied to",
        error
      );
      res.sendStatus(500);
    } else {
      res.status(200).json(results);
    }
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
