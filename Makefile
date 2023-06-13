DB_DATA	= .db-data

# Functions
all: dev

$(DB_DATA):
	mkdir $(DB_DATA)

up: $(DB_DATA)
	@docker compose up --build

down:
	docker compose down

dev:
	@docker compose up --build --detach 
	
clean:
	docker compose down -v --rmi all

re: clean all