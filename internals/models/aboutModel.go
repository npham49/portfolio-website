package models

import (
	"database/sql"
	"time"

	"github.com/google/uuid"
	"gorm.io/gorm"
)

type About struct {
	gorm.Model
	ID        uuid.UUID      `json:"id" gorm:"type:uuid;default:gen_random_uuid()"`
	Version   int            `json:"version" gorm:"autoIncrement;"`
	Photo     sql.NullString `json:"photo"`
	CreatedAt time.Time      `json:"createdAt"` // Automatically managed by GORM for creation time
	UpdatedAt time.Time      `json:"updatedAt"` // Automatically managed by GORM for update time
	Published bool           `json:"published" gorm:"default:false"`
	Content   string         `json:"content"`
	Summary   string         `json:"summary"`
}
