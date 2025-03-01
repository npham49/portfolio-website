include .env

migrate:
	go run internals/migrate/migrate.go

build:
	go build -o bin/main cmd/main.go

run:
	go run cmd/main.go