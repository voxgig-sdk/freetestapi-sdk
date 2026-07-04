# Typed models for the Freetestapi SDK.
#
# GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
# params (op.<name>.points[].args.params[]). Field/param types come from the
# canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
# @voxgig/apidef VALID_CANON). Do not edit by hand.

from __future__ import annotations

from dataclasses import dataclass
from typing import Optional, Any


@dataclass
class Product:
    brand: Optional[str] = None
    category: Optional[str] = None
    created_at: Optional[str] = None
    description: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    name: Optional[str] = None
    price: Optional[float] = None
    rating: Optional[float] = None
    stock: Optional[int] = None


@dataclass
class ProductListMatch:
    brand: Optional[str] = None
    category: Optional[str] = None
    created_at: Optional[str] = None
    description: Optional[str] = None
    id: Optional[int] = None
    image: Optional[str] = None
    name: Optional[str] = None
    price: Optional[float] = None
    rating: Optional[float] = None
    stock: Optional[int] = None


@dataclass
class User:
    address: Optional[dict] = None
    company: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None


@dataclass
class UserLoadMatch:
    id: int


@dataclass
class UserListMatch:
    address: Optional[dict] = None
    company: Optional[dict] = None
    email: Optional[str] = None
    id: Optional[int] = None
    name: Optional[str] = None
    phone: Optional[str] = None
    username: Optional[str] = None
    website: Optional[str] = None

