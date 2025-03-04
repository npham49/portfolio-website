package controllers

import (
	"context"
	"net/http"
	"portfolio-site/views"
	"time"

	"github.com/a-h/templ"
	"github.com/gin-gonic/gin"
)

const appTimeout = time.Second * 10

func render(c *gin.Context, status int, template templ.Component) error {
	c.Status(status)
	return template.Render(c.Request.Context(), c.Writer)
}

func Index(c *gin.Context) {
	_, cancel := context.WithTimeout(c.Request.Context(), appTimeout)
	defer cancel()

	render(c, http.StatusOK, views.Hello("Dinh Nguyen Pham"))
}

func About(c *gin.Context) {
	_, cancel := context.WithTimeout(c.Request.Context(), appTimeout)
	defer cancel()

	render(c, http.StatusOK, views.About())
}
