// Typed models for the Freetestapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.

export interface Product {
  brand?: string
  category?: string
  created_at?: string
  description?: string
  id?: number
  image?: string
  name?: string
  price?: number
  rating?: number
  stock?: number
}

export type ProductListMatch = Partial<Product>

export interface User {
  address?: Record<string, any>
  company?: Record<string, any>
  email?: string
  id?: number
  name?: string
  phone?: string
  username?: string
  website?: string
}

export interface UserLoadMatch {
  id: number
}

export type UserListMatch = Partial<User>

