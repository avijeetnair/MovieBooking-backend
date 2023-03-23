# MovieBooking-backend
MBA - Movie Booking Application Backend
Learning the development of RESTful APIs for backend
This code base contains logic/structure for creating the Restful APIs for the MBA app

Features
Setting up project structure and database
Setting up data models for movie item
API for CRUD operation on movie resource-
Ability to create, read, update and delete movies.


Prerequisite
Understanding of Node.js
Understanding of Async Await
Mongo DB locally installed and running
Tech
Node.js
Mongodb
Installation
this app requires Node.js v14+ to run.

Install the dependencies and devDependencies and start the server.

cd mba
npm install
npm run devStart
Rest endpoints
1. Create a new movie
POST /mba/api/v1/movies/
Sample request body :
{
        "name": "Sharmaji Namkeen",
        "description": "Comedy Masala Movie",
        "casts": [
            "Rishi Kapoor",
            "Juhi Chawla"
        ],
        "trailerUrl": "http://sharmajinamkeen/trailers/1",
        "posterUrl": "http://sharmajisamkeen/posters/1",
        "language": "Hindi",
        "releaseDate": "31-03-2022",
        "director": "Hitesh Bhatia",
        "releaseStatus": "UNRELEASED"
}

Sample response body :
{
    "name": "Sharmaji Namkeen",
    "description": "Comedy Masala Movie",
    "casts": [
        "Rishi Kapoor",
        "Juhi Chawla"
    ],
    "trailerUrl": "http://sharmajinamkeen/trailers/1",
    "posterUrl": "http://sharmajisamkeen/posters/1",
    "language": "Hindi",
    "releaseDate": "31-03-2022",
    "director": "Hitesh Bhatia",
    "releaseStatus": "RELEASED",
    "_id": "6245ef42bddfa2ae0d2bba58",
    "updatedAt": "2022-03-31T18:13:22.598Z",
    "__v": 0
}
2. Get all the movies
GET /mba/api/v1/movies/

Sample response body :
[
    {
        "_id": "6245ef3fbddfa2ae0d2bba4e",
        "name": "Bachhan Pandey",
        "description": "Comedy Masala Movie",
        "casts": [
            "Akshay Kumar",
            "Jacqueline Fernandiz"
        ],
        "trailerUrl": "http://bacchanpandey/trailers/1",
        "posterUrl": "http://bacchanpandey/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Farhad Samji",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.828Z",
        "__v": 0
    },
    {
        "_id": "6245ef3fbddfa2ae0d2bba50",
        "name": "Jalsa",
        "description": "Intense Drama Movie",
        "casts": [
            "Vidya Balan",
            "Shefali Shah"
        ],
        "trailerUrl": "http://jalsa/trailers/1",
        "posterUrl": "http://jalsa/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Suresh Triveni",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.873Z",
        "__v": 0
    },
    {
        "_id": "6245ef3fbddfa2ae0d2bba52",
        "name": "Jhund",
        "description": "Comedy Drama Movie",
        "casts": [
            "Amitabh Bachchan",
            "Abhinay Raj"
        ],
        "trailerUrl": "http://jhund/trailers/1",
        "posterUrl": "http://jhund/posters/1",
        "language": "Hindi",
        "releaseDate": "04-03-2022",
        "director": "Nagraj Manjule",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.876Z",
        "__v": 0
    }
]
3. Get the movies based on name
GET /mba/api/v1/movies?name=Jalsa

Sample response body :
[
    {
        "_id": "6245ef3fbddfa2ae0d2bba50",
        "name": "Jalsa",
        "description": "Intense Drama Movie",
        "casts": [
            "Vidya Balan",
            "Shefali Shah"
        ],
        "trailerUrl": "http://jalsa/trailers/1",
        "posterUrl": "http://jalsa/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Suresh Triveni",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.873Z",
        "__v": 0
    }
]
4. Get the movies based on movie id
GET /mba/api/v1/movies/6245ef3fbddfa2ae0d2bba50

Sample response body :
[
    {
        "_id": "6245ef3fbddfa2ae0d2bba50",
        "name": "Jalsa",
        "description": "Intense Drama Movie",
        "casts": [
            "Vidya Balan",
            "Shefali Shah"
        ],
        "trailerUrl": "http://jalsa/trailers/1",
        "posterUrl": "http://jalsa/posters/1",
        "language": "Hindi",
        "releaseDate": "18-03-2022",
        "director": "Suresh Triveni",
        "releaseStatus": "RELEASED",
        "updatedAt": "2022-03-31T18:13:19.873Z",
        "__v": 0
    }
]
5. Update the movies based on movie id
PUT /mba/api/v1/movies/6245ef3fbddfa2ae0d2bba50

Sample request body :
{
        "name": "Sharmaji Namkeen",
        "description": "Comedy Masala Movie : Updated",
        "casts": [
            "Rishi Kapoor",
            "Juhi Chawla"
        ],
        "trailerUrl": "http://sharmajinamkeen/trailers/1",
        "posterUrl": "http://sharmajisamkeen/posters/1",
        "language": "Hindi",
        "releaseDate": "31-03-2022",
        "director": "Hitesh Bhatia",
        "releaseStatus": "UNRELEASED"
}
Sample response body :
{
    "_id": "6245f0babddfa2ae0d2bba5d",
    "name": "Sharmaji Namkeen",
    "description": "Comedy Masala Movie : Updated",
    "casts": [
        "Rishi Kapoor",
        "Juhi Chawla"
    ],
    "trailerUrl": "http://sharmajinamkeen/trailers/1",
    "posterUrl": "http://sharmajisamkeen/posters/1",
    "language": "Hindi",
    "releaseDate": "31-03-2022",
    "director": "Hitesh Bhatia",
    "releaseStatus": "RELEASED",
    "updatedAt": "2022-03-31T18:19:38.983Z",
    "__v": 0
}
5. Update the movies based on movie id
DELETE /mba/api/v1/movies/6245ef3fbddfa2ae0d2bba50
Sample response body :
{
    "message": "Successfully delete movie with id [ 6245f0babddfa2ae0d2bba5d ]"
}
