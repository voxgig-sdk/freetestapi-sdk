<?php
declare(strict_types=1);

// Typed models for the Freetestapi SDK.
//
// GENERATED from the API model: main.kit.entity.<e>.fields[] and per-op
// params (op.<name>.points[].args.params[]). Field/param types come from the
// canonical type sentinels via @voxgig/sdkgen canonToType (source of truth:
// @voxgig/apidef VALID_CANON). Do not edit by hand.
//
// These are documentation-grade value objects (PHP 8 typed properties),
// registered on the composer classmap autoload. The SDK boundary exchanges
// assoc-arrays; these classes name the shapes for tooling and typed callers.

/** Product entity data model. */
class Product
{
    public ?string $brand = null;
    public ?string $category = null;
    public ?string $createdAt = null;
    public ?string $description = null;
    public ?int $id = null;
    public ?string $image = null;
    public ?string $name = null;
    public ?float $price = null;
    public ?float $rating = null;
    public ?int $stock = null;
}

/** Request payload for Product#list. */
class ProductListMatch
{
    public ?string $category = null;
    public ?int $limit = null;
    public ?int $page = null;
}

/** User entity data model. */
class User
{
    public ?array $address = null;
    public ?array $company = null;
    public ?string $email = null;
    public ?int $id = null;
    public ?string $name = null;
    public ?string $phone = null;
    public ?string $username = null;
    public ?string $website = null;
}

/** Request payload for User#load. */
class UserLoadMatch
{
    public int $id;
}

/** Request payload for User#list. */
class UserListMatch
{
    public ?int $limit = null;
    public ?int $page = null;
}

