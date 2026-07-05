# frozen_string_literal: true

# Typed models for the Freetestapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Member types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Ruby types are unenforced; these YARD
# annotations document the shapes. Do not edit by hand.

# Product entity data model.
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rating
#   @return [Float, nil]
#
# @!attribute [rw] stock
#   @return [Integer, nil]
Product = Struct.new(
  :brand,
  :category,
  :created_at,
  :description,
  :id,
  :image,
  :name,
  :price,
  :rating,
  :stock,
  keyword_init: true
)

# Request payload for Product#list.
#
# @!attribute [rw] brand
#   @return [String, nil]
#
# @!attribute [rw] category
#   @return [String, nil]
#
# @!attribute [rw] created_at
#   @return [String, nil]
#
# @!attribute [rw] description
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] image
#   @return [String, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] price
#   @return [Float, nil]
#
# @!attribute [rw] rating
#   @return [Float, nil]
#
# @!attribute [rw] stock
#   @return [Integer, nil]
ProductListMatch = Struct.new(
  :brand,
  :category,
  :created_at,
  :description,
  :id,
  :image,
  :name,
  :price,
  :rating,
  :stock,
  keyword_init: true
)

# User entity data model.
#
# @!attribute [rw] address
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
User = Struct.new(
  :address,
  :company,
  :email,
  :id,
  :name,
  :phone,
  :username,
  :website,
  keyword_init: true
)

# Request payload for User#load.
#
# @!attribute [rw] id
#   @return [Integer]
UserLoadMatch = Struct.new(
  :id,
  keyword_init: true
)

# Request payload for User#list.
#
# @!attribute [rw] address
#   @return [Hash, nil]
#
# @!attribute [rw] company
#   @return [Hash, nil]
#
# @!attribute [rw] email
#   @return [String, nil]
#
# @!attribute [rw] id
#   @return [Integer, nil]
#
# @!attribute [rw] name
#   @return [String, nil]
#
# @!attribute [rw] phone
#   @return [String, nil]
#
# @!attribute [rw] username
#   @return [String, nil]
#
# @!attribute [rw] website
#   @return [String, nil]
UserListMatch = Struct.new(
  :address,
  :company,
  :email,
  :id,
  :name,
  :phone,
  :username,
  :website,
  keyword_init: true
)

