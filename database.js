let sqlite3 = require("sqlite3");

let database = new sqlite3.Database("./database.db");

const createTableJobSeekerQuery =
  "CREATE TABLE IF NOT EXISTS JobSeeker (name TEXT, city_location TEXT, profession_id INTEGER, age INTEGER, years_of_experience INTEGER, country_location TEXT)";

const createTableJobsQuery =
  "CREATE TABLE IF NOT EXISTS Jobs (position TEXT, company TEXT, salary INTEGER, city_location TEXT, country_location TEXT, profession_id INTEGER, date_posted INTEGER) ";

const createTableJobsAppliedQuery =
  "CREATE TABLE IF NOT EXISTS Jobs_Applied (applicant_id INTEGER, job_id INTEGER)";

database.run(createTableJobSeekerQuery, error => {
  if (error) console.log(new Error("Create Job Seeker table failed"), error);
  else console.log("Create new Job Seeker table succeeded!");
});

database.run(createTableJobsQuery, error => {
  if (error) console.log(new Error("Create Jobs table failed"), error);
  else console.log("Create new Jobs table succeeded!");
});

database.run(createTableJobsAppliedQuery, error => {
  if (error)
    console.log(new Error("Create Jobs Applied To Table failed"), error);
  else console.log("Create Jobs Applied To succeeded!");
});

module.exports = database;
