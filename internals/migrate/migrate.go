package main

import (
	"portfolio-site/internals/initializers"
	"portfolio-site/internals/models"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
}

func main() {
	initializers.DB.AutoMigrate(&models.About{})
}
