# The-Jobbs-App
Job Listing and Applied-to Database 

Trello Board Link : https://trello.com/b/zjxzB2Dj/jobbs-api

### SUMMARY OF PROJECT 

I wanted to create a way to track the Jobs I want to apply to and the jobs that I have applied to during my job search process. I have created a relational API with 4 Tables. Below is a quick summary of the information you may expect from these tables.

This will require and utilizes Nodemon, Express, SQL3, DB Browser and Postman. 

At it's current state the API includes the following tables with the following values: 

![Tables and Values](https://github.com/pipe2705/The-Jobbs-App/blob/master/images/Tables%20and%20Values.png?raw=true)

### TABLE AND API FUNCTIONALITY

Using CRUD methodology below I will go through an example on the routes and general functionality of the app. I will be using POSTMAN to generate the requests.  

#### Creating a new JobSeeker
As this is a Job tracking app we need to add the people who would be seeking a job. To accomplish this we will generate a POST request to the JobSeeker Table so we can add a new person who would be seeking a job. 
The route for this request would need to be routed to /api/JobSeeker. The new job seeker will need to be generated as a JSON object and the information will need to include all the key value pairs for the JobSeeker Table. See image below for an example: 

I will be using port 3000 and will need to elaborate on the path to make the post request to the right port and route. The complete route will need to be: localhost:3000/api/JobSeeker

`localhost:3000/api/JobSeeker`
```
[
    {
        "name": "Felipe Gonzalez",
        "city_location": "San Francisco",
        "profession_id": 1,
        "age": 29,
        "years_of_experience": 6,
        "country_location": "USA"
    }
 ]
```

Once the new JobSeeker(s) have been added we can perform other CRUD operations to this and the other objects added. 

#### Get a list of ALL the job seekers in the JobSeeker Table 

Once several JobSeeker(s) have been added we can verify this list with a GET request. The correct path for this needs to be routed to /api/JobSeeker

`localhost:3000/api/JobSeeker`
```
[
    {
        "name": "Felipe Gonzalez",
        "city_location": "San Francisco",
        "profession_id": 1,
        "age": 29,
        "years_of_experience": 6,
        "country_location": "USA"
    },
    {
        "name": "Mallory Lemieux",
        "city_location": "San Francisco",
        "profession_id": 2,
        "age": 32,
        "years_of_experience": 9,
        "country_location": "USA"
    }
]
```

Once verified we can also view the information of one JobSeeker using the id #. In this case we want to view the 1st JobSeeker: 

`localhost:3000/api/JobSeeker/1`
 
```
[
    {
        "name": "Felipe Gonzalez",
        "city_location": "San Francisco",
        "profession_id": 1,
        "age": 29,
        "years_of_experience": 6,
        "country_location": "USA"
    }
 ]
```

We can also update the information on a Job Seeker using a PUT request using the id of the JobSeeker. The path is the following and depending on the edits made in the JSON object you will be able to see the changes using a GET request for that specific JobSeeker using it's ID. 

`localhost:3000/api/JobSeeker/1`

We can also DELETE a JobSeeker using it's ID using the same path as above. This will delete all the information regarding this JobSeeker:

`localhost:3000/api/JobSeeker/1`


Using the same logic as above we can create numerous relationships and requests for the remaining tables. The routes to follow are below. Because I am using Postman to run the routes I need to add `localhost:3000` to the start of my requests as I am using a local host and port 3000.

![Routes](https://github.com/pipe2705/The-Jobbs-App/blob/master/images/Routes%20.png?raw=true)










