# Classmate-Finder

Classmate Finder is a website designed to help students group up with students with similar classes, majors, personalities, and skill sets. These groups could be study groups or groups required for class projects. On sign-up, users will be required to fill out a survey with general questions about their class schedule, majors, personality traits, and skills. This data will be stored in the database and students will be suggested classmates based on their survey answers. This product will be limited to UF students. To create an account, students must sign up with their UF-issued email.



----------
Getting Started
===============


Clone repository 

`cd Classmate-Finder` Change Directory to the Cloned file



Front-end Interface
----------
`cd classmate-finder` Change directory to Front-end interface

`npm install` Download all Dependencies

`npm start` To start interface 

Open browser and go to `localhost:3000`


Back-end Interface
----------
In another terminal:

`cd backend` Change directory to back-end interface

`npm install` Download all Dependencies

Inside the backend folder go to -> config -> open config.json

Find this:

` "development": {
    "username": "root",
    "password": "teamtech",
    "database": "classmate",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
 `
 
 Update the password and database to your respected database and password for your MySQL.
 
 `npm start` To start backend
 
 You can open brower `localhost:3001` to see all the API requests.



