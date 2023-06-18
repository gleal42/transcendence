DB_DATA	= .db-data

# Functions
all: dev

$(DB_DATA):
	mkdir $(DB_DATA)

up: $(DB_DATA)
	docker compose up -d --build

down:
	docker compose down

dev:
	docker compose up

clean:
	docker compose down -v --rmi all
