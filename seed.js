const db = require("./database.js");

const jobSeekerList = [
  {
    name: "Felipe Gonzalez",
    city_location: "San Francisco",
    profession_id: 1,
    age: 29,
    years_of_experience: 6,
    country_location: "USA"
  },

  {
    name: "Mallory Lemieux",
    city_location: "San Francisco",
    profession_id: 2,
    age: 32,
    years_of_experience: 9,
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
    profession_id: 1,
    week_posted: 30,
    is_fulltime: 1
  },
  {
    position: "Product Manager",
    company: "Assembly General",
    salary: 25000,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: 1,
    week_posted: 30,
    is_fulltime: 0
  },
  {
    position: "Product Manager",
    company: "TASK Rabbit",
    salary: 130000,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: 1,
    week_posted: 47,
    is_fulltime: 1
  },
  {
    position: "Associate Product Manager",
    company: "SISENSE",
    salary: null,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: 4,
    week_posted: 46,
    is_fulltime: 1
  },
  {
    position: "Product Manager",
    company: "Accellion",
    salary: 123000,
    city_location: "Palo Alto",
    country_location: "USA",
    profession_id: 1,
    week_posted: 43,
    is_fulltime: 1
  },
  {
    position: " Full Stack Engineer",
    company: "Airbnb",
    salary: 150000,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: 12,
    week_posted: 47,
    is_fulltime: 1
  },
  {
    position: " Full Stack Engineer",
    company: "Reddit, Inc",
    salary: 134000,
    city_location: "San Francisco",
    country_location: "USA",
    profession_id: 12,
    week_posted: 46,
    is_fulltime: 0
  }
];

const professionList = [
  {
    title: "Product Manager",
    industry: "Software/Technology"
  },
  {
    title: "Product Manager",
    industry: "Hardware"
  },
  {
    title: "Software Engineer",
    industry: "Software/Technology"
  },
  {
    title: "Associate Product Manager",
    industry: "Software/Technology"
  },
  {
    title: "Product Designer",
    industry: "Software/Technology"
  },
  {
    title: "Product Designer",
    industry: "Hardware"
  },
  {
    title: "User Experience Designer",
    industry: "Software/Technology"
  },
  {
    title: "User Experience Designer",
    industry: "Hardware"
  },
  {
    title: "Technical Product Manager",
    industry: "Software/Technology"
  },
  {
    title: "Front-End Engineer",
    industry: "Software/Technology"
  },
  {
    title: "Back-End Engineer",
    industry: "Software/Technology"
  },
  {
    title: "Full Stack Engineer",
    industry: "Software/Technology"
  }
];

const deleteJobSeeker = "DELETE FROM JobSeeker";
const deleteJobs = "DELETE FROM Jobs";
const deleteProfession = "DELETE FROM Profession";
const insertIntoJobSeeker =
  " INSERT INTO JobSeeker (name, city_location, profession_id, age, years_of_experience, country_location) VALUES (?, ?, ?, ?, ?, ?)";
const insertIntoJobs =
  "INSERT INTO Jobs (position, company, salary, city_location, country_location, profession_id, week_posted, is_fulltime) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
const insertIntoProfession =
  "INSERT INTO Profession (title, industry) VALUES (?, ?)";

//
//
//
//
//

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
              job.week_posted,
              job.is_fulltime
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
        db.run(deleteProfession, error => {
          if (error)
            console.log(new Error("Could not delete Profession"), error);
          else {
            professionList.forEach(prof => {
              db.run(
                insertIntoProfession,
                [prof.title, prof.industry],
                error => {
                  if (error)
                    console.log(
                      new Error("Could not add profession value"),
                      error
                    );
                  else {
                    console.log(
                      `${prof.title} successfully added to the database`
                    );
                  }
                }
              );
            });
          }
        });
      }
    });
  }
});

module.exports = db;
