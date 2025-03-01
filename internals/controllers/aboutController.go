package controllers

import (
	"database/sql"
	"portfolio-site/internals/initializers"
	"portfolio-site/internals/models"

	"github.com/gin-gonic/gin"
)

func AboutCreate(c *gin.Context) {
	// Get data from req body
	var body struct {
		Content string
		Summary string
		Photo   sql.NullString
	}
	c.Bind(&body)

	// Create a about
	about := models.About{
		Content: body.Content,
		Summary: body.Summary,
		Photo:   body.Photo}
	result := initializers.DB.Create(&about)

	if result.Error != nil {
		c.Status(400)
		return
	}

	// Return it
	c.JSON(200, gin.H{
		"about": about,
	})
}

func AboutIndex(c *gin.Context) {
	// Get all the abouts
	var about []models.About
	initializers.DB.Find(&about)

	// Return about in response
	c.JSON(200, gin.H{
		"about": about,
	})
}

func AboutShow(c *gin.Context) {
	// Get id from URL param
	id := c.Param("id")

	// Get a single about
	var about models.About
	initializers.DB.First(&about, id)

	// Return about in response
	c.JSON(200, gin.H{
		"about": about,
	})
}

func AboutPublished(c *gin.Context) {
	// Get the latest published about
	var about models.About
	initializers.DB.Where("Published = ?", true).Where("max(Version)").First(&about)
	// Return about in response
	c.JSON(200, gin.H{
		"about": about,
	})
}

func AboutUpdate(c *gin.Context) {
	// Get id from URL param
	id := c.Param("id")

	// get the data of req body
	var body struct {
		Content   string
		Summary   string
		Photo     string
		Published bool
	}
	c.Bind(&body)

	// Get a single about that we want to update
	var about models.About
	initializers.DB.First(&about, id)

	// Update it
	initializers.DB.Model(&about).Updates(models.About{
		Content:   body.Content,
		Summary:   body.Summary,
		Photo:     sql.NullString{String: body.Photo, Valid: true},
		Published: body.Published,
	})

	// Return response
	c.JSON(200, gin.H{
		"about": about,
	})
}

func AboutDelete(c *gin.Context) {
	// Get id from URL param
	id := c.Param("id")

	// Delete the About
	initializers.DB.Delete(&models.About{}, id)

	// Return response
	c.JSON(200, gin.H{
		"message": "About removed Successfully",
	})
}
