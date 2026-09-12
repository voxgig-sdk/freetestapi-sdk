export interface Product {
    brand?: string;
    category?: string;
    createdAt?: string;
    description?: string;
    id?: number;
    image?: string;
    name?: string;
    price?: number;
    rating?: number;
    stock?: number;
}
export interface ProductListMatch {
    category?: string;
    limit?: number;
    page?: number;
}
export interface User {
    address?: Record<string, any>;
    company?: Record<string, any>;
    email?: string;
    id?: number;
    name?: string;
    phone?: string;
    username?: string;
    website?: string;
}
export interface UserLoadMatch {
    id: number;
}
export interface UserListMatch {
    limit?: number;
    page?: number;
}
