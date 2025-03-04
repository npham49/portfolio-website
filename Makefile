include .env

migrate:
	go run internals/migrate/migrate.go

generate:
	templ generate

build:
	go build -o bin/main cmd/main.go

run:
	go run cmd/main.go