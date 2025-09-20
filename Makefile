COMPOSE ?= docker-compose
DEV_FILES = -f docker-compose.yml -f docker-compose.override.dev.yml
ENV_FILE ?= .env

.PHONY: build clean dev dev-build up down

build:
	${COMPOSE} build front-back-end db

clean:
	${COMPOSE} down -v

# deving
dev:
	${COMPOSE} ${DEV_FILES} up -d dev-next db


up:
	${COMPOSE} up -d front-back-end db

down:
	${COMPOSE} down
