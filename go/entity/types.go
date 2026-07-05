// Typed models for the Freetestapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
package entity

import "encoding/json"

// Product is the typed data model for the product entity.
type Product struct {
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Price *float64 `json:"price,omitempty"`
	Rating *float64 `json:"rating,omitempty"`
	Stock *int `json:"stock,omitempty"`
}

// ProductListMatch is the typed request payload for Product.ListTyped.
type ProductListMatch struct {
	Brand *string `json:"brand,omitempty"`
	Category *string `json:"category,omitempty"`
	CreatedAt *string `json:"created_at,omitempty"`
	Description *string `json:"description,omitempty"`
	Id *int `json:"id,omitempty"`
	Image *string `json:"image,omitempty"`
	Name *string `json:"name,omitempty"`
	Price *float64 `json:"price,omitempty"`
	Rating *float64 `json:"rating,omitempty"`
	Stock *int `json:"stock,omitempty"`
}

// User is the typed data model for the user entity.
type User struct {
	Address *map[string]any `json:"address,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
}

// UserLoadMatch is the typed request payload for User.LoadTyped.
type UserLoadMatch struct {
	Id int `json:"id"`
}

// UserListMatch is the typed request payload for User.ListTyped.
type UserListMatch struct {
	Address *map[string]any `json:"address,omitempty"`
	Company *map[string]any `json:"company,omitempty"`
	Email *string `json:"email,omitempty"`
	Id *int `json:"id,omitempty"`
	Name *string `json:"name,omitempty"`
	Phone *string `json:"phone,omitempty"`
	Username *string `json:"username,omitempty"`
	Website *string `json:"website,omitempty"`
}

// asMap turns a typed request/data struct into the map[string]any the
// runtime op pipeline consumes, honouring the json tags above.
func asMap(v any) map[string]any {
	out := map[string]any{}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedFrom decodes a runtime value (a map[string]any produced by the op
// pipeline) into a typed model T via a JSON round-trip. On any error it
// returns the zero value of T; the op's own (value, error) tuple carries the
// real error.
func typedFrom[T any](v any) T {
	var out T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}

// typedSliceFrom decodes a runtime list value ([]any of maps) into a typed
// slice []T via a JSON round-trip, for list ops.
func typedSliceFrom[T any](v any) []T {
	var out []T
	if v == nil {
		return out
	}
	b, err := json.Marshal(v)
	if err != nil {
		return out
	}
	_ = json.Unmarshal(b, &out)
	return out
}
