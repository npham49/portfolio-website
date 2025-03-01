package main

import (
	"portfolio-site/internals/initializers"
	"portfolio-site/internals/routes"

	"github.com/gin-gonic/gin"
)

func init() {
	initializers.LoadEnvVariables()
	initializers.ConnectDB()
}

func main() {

	r := gin.Default()

	// Todo Routes
	routes.AboutRoutes(r)

	r.Run()
}
