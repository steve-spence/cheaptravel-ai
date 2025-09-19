COMPOSE ?= docker-compose
DEV_FILES = -f docker-compose.yml -f docker-compose.override.dev.yml
ENV_FILE ?= .env

.PHONY: build clean
build:
	${COMPOSE} build front-back-end db
clean:
	${COMPOSE} down -v



.PHONY: up down
up: 
	${COMPOSE} up -d front-back-end db

down: 
	${COMPOSE} down
