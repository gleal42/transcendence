include .env
DB_DATA	= $(DB_VOL_LOC)

# Functions
all: dev	

up:
	@if [ ! -d $(DB_DATA) ]; then \
      mkdir $(DB_DATA); \
	fi
	@docker compose up --build

down:
	docker compose down

dev:
	@docker compose up --build --detach 
	
clean:
	docker compose down -v --rmi all

re: clean all