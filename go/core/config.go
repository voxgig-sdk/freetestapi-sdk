package core

import (
	"sync"
)

// MakeConfig builds a fresh, fully materialised config map. Every call
// rebuilds the whole structure, so prefer SharedConfig unless you need a
// private copy you intend to mutate.
func MakeConfig() map[string]any {
	return map[string]any{
		"main": map[string]any{
			"name": "Freetestapi",
			"slug": "freetestapi",
			"version": "0.0.1",
			"target": "go",
		},
		"feature": map[string]any{
			"test": map[string]any{
				"options": map[string]any{
					"active": false,
				},
				"transport": "base",
			},
		},
		"options": map[string]any{
			"base": "https://freetestapi.com/api/v1",
			"headers": map[string]any{
				"content-type": "application/json",
			},
			"entity": map[string]any{
				"product": map[string]any{},
				"user": map[string]any{},
			},
		},
		"entity": map[string]any{
			"product": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "brand",
						"short": "Brand name of the product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "category",
						"short": "Product category",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "createdAt",
						"short": "Product creation timestamp",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "description",
						"short": "Detailed description of the product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the product",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "image",
						"short": "URL to product image",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "name",
						"short": "Name of the product",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "price",
						"short": "Price of the product in USD",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "rating",
						"short": "Average product rating (0-5)",
						"type": "`$NUMBER`",
					},
					map[string]any{
						"name": "stock",
						"short": "Available stock quantity",
						"type": "`$INTEGER`",
					},
				},
				"name": "product",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"kind": "query",
											"name": "category",
											"orig": "category",
											"type": "`$STRING`",
										},
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/products",
								"parts": []any{
									"products",
								},
								"select": map[string]any{
									"exist": []any{
										"category",
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
			"user": map[string]any{
				"fields": []any{
					map[string]any{
						"name": "address",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "company",
						"type": "`$OBJECT`",
					},
					map[string]any{
						"name": "email",
						"short": "Email address of the user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "id",
						"short": "Unique identifier for the user",
						"type": "`$INTEGER`",
					},
					map[string]any{
						"name": "name",
						"short": "Full name of the user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "phone",
						"short": "Phone number of the user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "username",
						"short": "Username of the user",
						"type": "`$STRING`",
					},
					map[string]any{
						"name": "website",
						"short": "Personal website URL",
						"type": "`$STRING`",
					},
				},
				"name": "user",
				"op": map[string]any{
					"list": map[string]any{
						"input": "data",
						"name": "list",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"query": []any{
										map[string]any{
											"example": 10,
											"kind": "query",
											"name": "limit",
											"orig": "limit",
											"type": "`$INTEGER`",
										},
										map[string]any{
											"example": 1,
											"kind": "query",
											"name": "page",
											"orig": "page",
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users",
								"parts": []any{
									"users",
								},
								"select": map[string]any{
									"exist": []any{
										"limit",
										"page",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
					"load": map[string]any{
						"input": "data",
						"name": "load",
						"points": []any{
							map[string]any{
								"args": map[string]any{
									"params": []any{
										map[string]any{
											"kind": "param",
											"name": "id",
											"orig": "id",
											"reqd": true,
											"type": "`$INTEGER`",
										},
									},
								},
								"kind": "http",
								"method": "GET",
								"orig": "/users/{id}",
								"parts": []any{
									"users",
									"{id}",
								},
								"select": map[string]any{
									"exist": []any{
										"id",
									},
								},
								"transform": map[string]any{
									"req": "`reqdata`",
									"res": "`body`",
								},
							},
						},
					},
				},
				"relations": map[string]any{
					"ancestors": []any{},
				},
			},
		},
	}
}

var (
	sharedConfigOnce sync.Once
	sharedConfigVal  map[string]any
)

// SharedConfig returns the process-wide config, built once on first use.
// The SDK reads the config on every request and never writes to it, so one
// instance is shared by every client rather than rebuilt per client.
//
// The returned map is shared: treat it as read-only. Callers that need to
// mutate should use MakeConfig, which always returns a fresh copy.
func SharedConfig() map[string]any {
	sharedConfigOnce.Do(func() {
		sharedConfigVal = MakeConfig()
	})
	return sharedConfigVal
}

func makeFeature(name string) Feature {
	switch name {
	case "test":
		if NewTestFeatureFunc != nil {
			return NewTestFeatureFunc()
		}
	default:
		if NewBaseFeatureFunc != nil {
			return NewBaseFeatureFunc()
		}
	}
	return nil
}
