# cheaptravel-ai

## Running the Project

Open Docker Desktop

From the root directory run 
```
make build
```
This starts the containers for the front-back-end and db

There are a few other commands the only ones worth worrying about are 'make dev' and 'make down'. 
When you run 'down' the containers close, and if you run dev it brings the containers back up. 
You should build once, then really only need to do 'make dev' and 'make down' unless you are having 
issues with dockerthen just delete the container and 'make build'

To not have errors with Database stuff do this:

Copy .env.example in .env


Go to http://localhost:4200 and check the /api/health route

Install the PostgreSQL extention on VSCode and add the connection string details that are in the .env
### POSTGRESQL IS ON PORT 5433 ###
