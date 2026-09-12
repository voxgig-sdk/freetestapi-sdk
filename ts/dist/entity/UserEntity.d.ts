import { FreetestapiEntityBase } from '../FreetestapiEntityBase';
import type { FreetestapiSDK } from '../FreetestapiSDK';
import type { Control } from '../types';
import type { User, UserLoadMatch, UserListMatch } from '../FreetestapiTypes';
declare class UserEntity extends FreetestapiEntityBase<User> {
    constructor(client: FreetestapiSDK, entopts: any);
    make(this: UserEntity): UserEntity;
    load(this: any, reqmatch?: UserLoadMatch, ctrl?: Control): Promise<UserEntity>;
    list(this: any, reqmatch?: UserListMatch, ctrl?: Control): Promise<UserEntity[]>;
}
export { UserEntity };
