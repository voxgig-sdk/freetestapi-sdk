package = "voxgig-sdk-freetestapi"
version = "0.0-1"
source = {
  url = "git://github.com/voxgig-sdk/freetestapi-sdk.git"
}
description = {
  summary = "Freetestapi SDK for Lua",
  license = "MIT"
}
dependencies = {
  "lua >= 5.3",
  "dkjson >= 2.5",
  "dkjson >= 2.5",
}
build = {
  type = "builtin",
  modules = {
    ["freetestapi_sdk"] = "freetestapi_sdk.lua",
    ["config"] = "config.lua",
    ["features"] = "features.lua",
  }
}
