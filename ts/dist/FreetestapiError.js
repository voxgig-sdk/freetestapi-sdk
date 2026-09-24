"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FreetestapiError = void 0;
class FreetestapiError extends Error {
    isFreetestapiError = true;
    sdk = 'Freetestapi';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.FreetestapiError = FreetestapiError;
//# sourceMappingURL=FreetestapiError.js.map