const db = require("./database.js");

const jobSeekerList = [
  {
    name: "Felipe Gonzalez",
    city_location: "San Francisco",
    profession_id: null,
    age: 29,
    years_of_experience: 6,
    country_location: "USA"
  }
];

const jobsList = [
  {
    position: "Product Manager",
    company: "General Assembly",
    salary: 20000,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: null,
    date_posted: null
  },
  {
    position: "Product Manager",
    company: "Assembly General",
    salary: 25000,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: null,
    date_posted: null
  }
];

const deleteJobSeeker = "DELETE FROM JobSeeker";
const deleteJobs = "DELETE FROM Jobs";
const insertIntoJobSeeker =
  " INSERT INTO JobSeeker (name, city_location, profession_id, age, years_of_experience, country_location) VALUES (?, ?, ?, ?, ?, ?)";
const insertIntoJobs =
  "INSERT INTO Jobs (position, company, salary, city_location, country_location, profession_id, date_posted) VALUES (?, ?, ?, ?, ?, ?, ?)";

db.run(deleteJobSeeker, error => {
  if (error) console.log(new Error("Could not delete Job Seeker"), error);
  else {
    jobSeekerList.forEach(jobSeeker => {
      db.run(
        insertIntoJobSeeker,
        [
          jobSeeker.name,
          jobSeeker.city_location,
          jobSeeker.profession_id,
          jobSeeker.age,
          jobSeeker.years_of_experience,
          jobSeeker.country_location
        ],
        error => {
          if (error) console.log(new Error("Could not add Job Seeker"), error);
          else {
            console.log(`${jobSeeker.name} successfully added to database`);
          }
        }
      );
    });
    db.run(deleteJobs, error => {
      if (error) console.log(new Error("Could not delete Job Listing"), error);
      else {
        jobsList.forEach(job => {
          db.run(
            insertIntoJobs,
            [
              job.position,
              job.company,
              job.salary,
              job.city_location,
              job.country_location,
              job.profession_id,
              job.date_posted
            ],
            error => {
              if (error)
                console.log(new Error("Could not add Job Listing"), error);
              else {
                console.log(
                  `${job.position} at ${job.company} successfully added to the database`
                );
              }
            }
          );
        });
      }
    });
  }
});

module.exports = db;
