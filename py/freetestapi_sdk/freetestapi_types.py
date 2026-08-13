# Typed models for the Freetestapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.
#
# These are TypedDicts, not dataclasses: the SDK ops return/accept plain dicts
# at runtime, and a TypedDict IS a dict shape, so the types match the runtime.
# Optional (req:false) keys are modelled as TypedDict key-optionality
# (total=False), split into a required base + total=False subclass when a type
# has both required and optional keys.

from __future__ import annotations

from typing import TypedDict, Any


class Product(TypedDict, total=False):
    brand: str
    category: str
    createdAt: str
    description: str
    id: int
    image: str
    name: str
    price: float
    rating: float
    stock: int


class ProductListMatch(TypedDict, total=False):
    brand: str
    category: str
    createdAt: str
    description: str
    id: int
    image: str
    name: str
    price: float
    rating: float
    stock: int


class User(TypedDict, total=False):
    address: dict
    company: dict
    email: str
    id: int
    name: str
    phone: str
    username: str
    website: str


class UserLoadMatch(TypedDict):
    id: int


class UserListMatch(TypedDict, total=False):
    address: dict
    company: dict
    email: str
    id: int
    name: str
    phone: str
    username: str
    website: str
