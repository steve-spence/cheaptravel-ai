# cheaptravel-ai

## Running the Project

Open Docker Desktop

From the root directory run 
```
make dev
```
This is start all the containers for the front-end, back-end, db, and nginx server

The only two commands I set up in make are 'dev' and 'down' so you just run these to build the project and sometimes you'll
want to close the cotainers. I'm gonna work on making it so your terminal doesn't blow up with stuff when we run it but I 
thought I would put this here. You guys can do whatever. This is a decent starter I think.

Copy .env.example in .env
This is start all the containers for the front-end, back-end, db, and nginx server.

Go to http://localhost:8080/health to make sure its working.

Same with the front end, go to http://localhost:4200
