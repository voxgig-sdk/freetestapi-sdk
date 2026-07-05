-- Typed models for the Freetestapi SDK (LuaLS annotations).
--
-- GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
-- params (op.<name>.points[].args.params[]). Field/param types come from the
-- canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
-- @voxgig/apidef VALID_CANON). Annotations only — no runtime effect. Do not
-- edit by hand.

---@class Product
---@field brand? string
---@field category? string
---@field created_at? string
---@field description? string
---@field id? number
---@field image? string
---@field name? string
---@field price? number
---@field rating? number
---@field stock? number

---@class ProductListMatch
---@field brand? string
---@field category? string
---@field created_at? string
---@field description? string
---@field id? number
---@field image? string
---@field name? string
---@field price? number
---@field rating? number
---@field stock? number

---@class User
---@field address? table
---@field company? table
---@field email? string
---@field id? number
---@field name? string
---@field phone? string
---@field username? string
---@field website? string

---@class UserLoadMatch
---@field id number

---@class UserListMatch
---@field address? table
---@field company? table
---@field email? string
---@field id? number
---@field name? string
---@field phone? string
---@field username? string
---@field website? string

local M = {}

return M
