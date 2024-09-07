package controllers

import (
	"encoding/json"
	"net/http"

	beego "github.com/beego/beego/v2/server/web"
)

// UserController operations for User
type UserController struct {
	beego.Controller
}

func (c *UserController) Get() {
	// Define some data to send as JSON
	response := map[string]interface{}{
		"name":  "John Doe",
		"email": "johndoe@example.com",
		"age":   29,
	}

	// Set the data as JSON
	c.Data["json"] = response

	// Serve the JSON response
	c.ServeJSON()
}

type UserInput struct {
	Name  string `json:"name"`
	Email string `json:"email"`
}

func (c *UserController) Post() {
	var input UserInput
	err := json.Unmarshal(c.Ctx.Input.RequestBody, &input)

	if err != nil {
		c.Ctx.Output.SetStatus(http.StatusBadRequest)
		c.Data["json"] = map[string]string{"error": "Invalid data"}
		c.ServeJSON()
		return
	}

	// response with
	response := map[string]string{
		"message": "Data received successfully",
		"name":    input.Name,
		"email":   input.Email,
	}
	c.Data["json"] = response
	c.ServeJSON()
}
