import { FreetestapiEntityBase } from '../FreetestapiEntityBase';
import type { FreetestapiSDK } from '../FreetestapiSDK';
import type { Control } from '../types';
import type { Product, ProductListMatch } from '../FreetestapiTypes';
declare class ProductEntity extends FreetestapiEntityBase<Product> {
    constructor(client: FreetestapiSDK, entopts: any);
    make(this: ProductEntity): ProductEntity;
    list(this: any, reqmatch?: ProductListMatch, ctrl?: Control): Promise<ProductEntity[]>;
}
export { ProductEntity };
