# cheaptravel-ai

## Running the Project

Open Docker Desktop

From the root directory run 
```
make build
```
This starts the containers for the front-back-end and db

There are a few other commands. The only ones worth worrying about are 'make dev' and 'make down'. 
When you run 'down' the containers close, and if you run 'dev' it brings the containers back up. 
You should build once, then really only need to 'make dev' and 'make down' unless you are having 
issues with docker. In that case, just delete the container and 'make build'.

Note: the make commands only work when in the root directory. Not in ./frontend.

To not have errors with Database stuff copy .env.example into a .env in the root directory.

Go to http://localhost:4200 and check the /api/health route

Install the PostgreSQL extention on VSCode and add the connection string details that are in the .env
### POSTGRESQL IS ON PORT 5433 ###
