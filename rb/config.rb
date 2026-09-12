# Freetestapi SDK configuration

module FreetestapiConfig
  # Return the process-wide config, built once on first use. The SDK reads
  # the config on every request and never writes to it, so one instance is
  # shared by every client rather than rebuilt per client.
  #
  # The returned hash is shared: treat it as read-only. Callers that need to
  # mutate should use make_config, which always returns a fresh copy.
  def self.shared_config
    @shared_config ||= make_config
  end


  # Build a fresh, fully materialised config hash. Every call rebuilds the
  # whole structure, so prefer shared_config unless you need a private copy
  # you intend to mutate.
  def self.make_config
    {
      "main" => {
        "name" => "Freetestapi",
        "slug" => "freetestapi",
        "version" => "0.0.1",
        "target" => "rb",
      },
      "feature" => {
        "test" => {
          "options" => {
            "active" => false,
          },
          "transport" => "base",
        },
      },
      "options" => {
        "base" => "https://freetestapi.com/api/v1",
        "headers" => {
          "content-type" => "application/json",
        },
        "entity" => {
          "product" => {},
          "user" => {},
        },
      },
      "entity" => {
        "product" => {
          "fields" => [
            {
              "name" => "brand",
              "short" => "Brand name of the product",
              "type" => "`$STRING`",
            },
            {
              "name" => "category",
              "short" => "Product category",
              "type" => "`$STRING`",
            },
            {
              "format" => "date-time",
              "name" => "createdAt",
              "short" => "Product creation timestamp",
              "type" => "`$STRING`",
            },
            {
              "name" => "description",
              "short" => "Detailed description of the product",
              "type" => "`$STRING`",
            },
            {
              "format" => "int64",
              "name" => "id",
              "short" => "Unique identifier for the product",
              "type" => "`$INTEGER`",
            },
            {
              "format" => "uri",
              "name" => "image",
              "short" => "URL to product image",
              "type" => "`$STRING`",
            },
            {
              "name" => "name",
              "short" => "Name of the product",
              "type" => "`$STRING`",
            },
            {
              "format" => "float",
              "name" => "price",
              "short" => "Price of the product in USD",
              "type" => "`$NUMBER`",
            },
            {
              "format" => "float",
              "name" => "rating",
              "short" => "Average product rating (0-5)",
              "type" => "`$NUMBER`",
            },
            {
              "name" => "stock",
              "short" => "Available stock quantity",
              "type" => "`$INTEGER`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "product",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "kind" => "query",
                        "name" => "category",
                        "orig" => "category",
                        "type" => "`$STRING`",
                      },
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/products",
                  "segments" => [
                    {
                      "lit" => "products",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "category",
                      "limit",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "products",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
        "user" => {
          "fields" => [
            {
              "name" => "address",
              "type" => "`$OBJECT`",
            },
            {
              "name" => "company",
              "type" => "`$OBJECT`",
            },
            {
              "format" => "email",
              "name" => "email",
              "short" => "Email address of the user",
              "type" => "`$STRING`",
            },
            {
              "format" => "int64",
              "name" => "id",
              "short" => "Unique identifier for the user",
              "type" => "`$INTEGER`",
            },
            {
              "name" => "name",
              "short" => "Full name of the user",
              "type" => "`$STRING`",
            },
            {
              "name" => "phone",
              "short" => "Phone number of the user",
              "type" => "`$STRING`",
            },
            {
              "name" => "username",
              "short" => "Username of the user",
              "type" => "`$STRING`",
            },
            {
              "format" => "uri",
              "name" => "website",
              "short" => "Personal website URL",
              "type" => "`$STRING`",
            },
          ],
          "id" => {
            "field" => "id",
            "name" => "id",
          },
          "name" => "user",
          "op" => {
            "list" => {
              "input" => "data",
              "name" => "list",
              "points" => [
                {
                  "args" => {
                    "query" => [
                      {
                        "example" => 10,
                        "kind" => "query",
                        "name" => "limit",
                        "orig" => "limit",
                        "type" => "`$INTEGER`",
                      },
                      {
                        "example" => 1,
                        "kind" => "query",
                        "name" => "page",
                        "orig" => "page",
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users",
                  "segments" => [
                    {
                      "lit" => "users",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "limit",
                      "page",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "users",
                  ],
                },
              ],
            },
            "load" => {
              "input" => "data",
              "name" => "load",
              "points" => [
                {
                  "args" => {
                    "params" => [
                      {
                        "kind" => "param",
                        "name" => "id",
                        "orig" => "id",
                        "reqd" => true,
                        "type" => "`$INTEGER`",
                      },
                    ],
                  },
                  "kind" => "http",
                  "method" => "GET",
                  "orig" => "/users/{id}",
                  "segments" => [
                    {
                      "lit" => "users",
                    },
                    {
                      "var" => "id",
                    },
                  ],
                  "select" => {
                    "exist" => [
                      "id",
                    ],
                  },
                  "transform" => {
                    "req" => "`reqdata`",
                    "res" => "`body`",
                  },
                  "parts" => [
                    "users",
                    "{id}",
                  ],
                },
              ],
            },
          },
          "relations" => {
            "ancestors" => [],
          },
        },
      },
    }
  end


  def self.make_feature(name)
    require_relative 'features'
    FreetestapiFeatures.make_feature(name)
  end
end
