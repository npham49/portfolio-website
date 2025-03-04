package routes

import (
	"portfolio-site/internals/controllers"

	"github.com/gin-gonic/gin"
)

func TemplateRoutes(r *gin.Engine) {
	templateGroup := r.Group("/")
	{
		// Todo Routes
		templateGroup.GET("/", controllers.Index)
		templateGroup.GET("/about", controllers.About)
	}
}
