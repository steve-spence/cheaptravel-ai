COMPOSE ?= docker-compose
DEV_FILES = -f docker-compose.yml -f docker-compose.override.dev.yml
ENV_FILE ?= .env

.PHONY: dev
dev:
	${COMPOSE} up --build


.PHONY: down
down: 
	${COMPOSE} down