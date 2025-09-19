# cheaptravel-ai

## Running the Project

Open Docker Desktop

From the root directory run 
```
make build
```
This is start all the containers for the front-back-end and db

There are two other commands right now, 'up' and 'down'. When you run down the containers close, and if you run up it brings the 
containers back up. You should build, then really only need to do 'make up' and 'make down' unless you are having issues with docker
then just delete the container and 'make build'

Copy .env.example in .env
This is start all the containers for the front-end, back-end, db, and nginx server.

Go to http://localhost:4200/api/health to make sure its working.

Same with the front end, go to http://localhost:4200
