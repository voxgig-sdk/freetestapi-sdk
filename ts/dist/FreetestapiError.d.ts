import { Context } from './Context';
declare class FreetestapiError extends Error {
    isFreetestapiError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { FreetestapiError };
