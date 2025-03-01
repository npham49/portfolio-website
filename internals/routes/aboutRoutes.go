package routes

import (
	"portfolio-site/internals/controllers"

	"github.com/gin-gonic/gin"
)

func AboutRoutes(r *gin.Engine) {
	aboutGroup := r.Group("/about")
	{
		// Todo Routes
		aboutGroup.GET("/", controllers.AboutIndex)
		aboutGroup.GET("/:id", controllers.AboutShow)
		aboutGroup.GET("/published", controllers.AboutPublished)
		aboutGroup.POST("/", controllers.AboutCreate)
		aboutGroup.PUT("/:id", controllers.AboutUpdate)
		aboutGroup.DELETE("/:id", controllers.AboutDelete)
	}
}
