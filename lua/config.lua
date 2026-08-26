-- Freetestapi SDK configuration

-- Build a fresh, fully materialised config table. Every call rebuilds the
-- whole structure, so prefer require("config_shared") unless you need a
-- private copy you intend to mutate.
local function make_config()
  return {
    main = {
      name = "Freetestapi",
      slug = "freetestapi",
      version = "0.0.1",
      target = "lua",
    },
    feature = {
      ["test"] = {
        ["options"] = {
          ["active"] = false,
        },
        ["transport"] = "base",
      },
    },
    options = {
      base = "https://freetestapi.com/api/v1",
      headers = {
        ["content-type"] = "application/json",
      },
      entity = {
        ["product"] = {},
        ["user"] = {},
      },
    },
    entity = {
      ["product"] = {
        ["fields"] = {
          {
            ["name"] = "brand",
            ["short"] = "Brand name of the product",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "category",
            ["short"] = "Product category",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "createdAt",
            ["short"] = "Product creation timestamp",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "description",
            ["short"] = "Detailed description of the product",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the product",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "image",
            ["short"] = "URL to product image",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "name",
            ["short"] = "Name of the product",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "price",
            ["short"] = "Price of the product in USD",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "rating",
            ["short"] = "Average product rating (0-5)",
            ["type"] = "`$NUMBER`",
          },
          {
            ["name"] = "stock",
            ["short"] = "Available stock quantity",
            ["type"] = "`$INTEGER`",
          },
        },
        ["name"] = "product",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["kind"] = "query",
                      ["name"] = "category",
                      ["orig"] = "category",
                      ["type"] = "`$STRING`",
                    },
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/products",
                ["parts"] = {
                  "products",
                },
                ["select"] = {
                  ["exist"] = {
                    "category",
                    "limit",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
      ["user"] = {
        ["fields"] = {
          {
            ["name"] = "address",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "company",
            ["type"] = "`$OBJECT`",
          },
          {
            ["name"] = "email",
            ["short"] = "Email address of the user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "id",
            ["short"] = "Unique identifier for the user",
            ["type"] = "`$INTEGER`",
          },
          {
            ["name"] = "name",
            ["short"] = "Full name of the user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "phone",
            ["short"] = "Phone number of the user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "username",
            ["short"] = "Username of the user",
            ["type"] = "`$STRING`",
          },
          {
            ["name"] = "website",
            ["short"] = "Personal website URL",
            ["type"] = "`$STRING`",
          },
        },
        ["name"] = "user",
        ["op"] = {
          ["list"] = {
            ["input"] = "data",
            ["name"] = "list",
            ["points"] = {
              {
                ["args"] = {
                  ["query"] = {
                    {
                      ["example"] = 10,
                      ["kind"] = "query",
                      ["name"] = "limit",
                      ["orig"] = "limit",
                      ["type"] = "`$INTEGER`",
                    },
                    {
                      ["example"] = 1,
                      ["kind"] = "query",
                      ["name"] = "page",
                      ["orig"] = "page",
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/users",
                ["parts"] = {
                  "users",
                },
                ["select"] = {
                  ["exist"] = {
                    "limit",
                    "page",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
          ["load"] = {
            ["input"] = "data",
            ["name"] = "load",
            ["points"] = {
              {
                ["args"] = {
                  ["params"] = {
                    {
                      ["kind"] = "param",
                      ["name"] = "id",
                      ["orig"] = "id",
                      ["reqd"] = true,
                      ["type"] = "`$INTEGER`",
                    },
                  },
                },
                ["kind"] = "http",
                ["method"] = "GET",
                ["orig"] = "/users/{id}",
                ["parts"] = {
                  "users",
                  "{id}",
                },
                ["select"] = {
                  ["exist"] = {
                    "id",
                  },
                },
                ["transform"] = {
                  ["req"] = "`reqdata`",
                  ["res"] = "`body`",
                },
              },
            },
          },
        },
        ["relations"] = {
          ["ancestors"] = {},
        },
      },
    },
  }
end


local function make_feature(name)
  local features = require("features")
  local factory = features[name]
  if factory ~= nil then
    return factory()
  end
  return features.base()
end


-- Attach make_feature to the SDK class
local function setup_sdk(SDK)
  SDK._make_feature = make_feature
end


return make_config
