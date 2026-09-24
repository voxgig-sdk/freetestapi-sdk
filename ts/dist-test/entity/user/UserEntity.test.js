"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_path_1 = __importDefault(require("node:path"));
const Fs = __importStar(require("node:fs"));
const node_test_1 = require("node:test");
const node_assert_1 = __importDefault(require("node:assert"));
const live_runner_1 = require("../../live-runner");
const live_entity_1 = require("../../live-entity");
const __1 = require("../../..");
const utility_1 = require("../../utility");
(0, utility_1.loadEnvLocal)(__dirname + '/../../../.env.local');
(0, node_test_1.describe)('UserEntity', async () => {
    // Per-test live pacing. Delay is read from sdk-test-control.json's
    // `test.live.delayMs`; only sleeps when FREETESTAPI_TEST_LIVE=TRUE.
    (0, node_test_1.afterEach)((0, utility_1.liveDelay)('FREETESTAPI_TEST_LIVE'));
    (0, node_test_1.test)('instance', async () => {
        const testsdk = __1.FreetestapiSDK.test();
        const ent = testsdk.User();
        (0, node_assert_1.default)(null != ent);
    });
    (0, node_test_1.test)('basic', async (t) => {
        const live = 'TRUE' === process.env.FREETESTAPI_TEST_LIVE;
        for (const op of ['list', 'load']) {
            if (!live && (0, utility_1.maybeSkipControl)(t, 'entityOp', 'user.' + op, live))
                return;
        }
        const setup = basicSetup();
        if (setup.live) {
            return (0, live_entity_1.runLiveEntity)(setup, { "active": true, "alias": { "field": {} }, "fields": { "address": { "a": true, "h": "Address", "n": "address", "r": false, "t": "`$OBJECT`", "key$": "address", "index$": 0 }, "company": { "a": true, "h": "Company", "n": "company", "r": false, "t": "`$OBJECT`", "key$": "company", "index$": 1 }, "email": { "a": true, "fo": "email", "h": "Email", "n": "email", "r": false, "sh": "Email address of the user", "t": "`$STRING`", "key$": "email", "index$": 2 }, "id": { "a": true, "fo": "int64", "h": "Id", "n": "id", "r": false, "sh": "Unique identifier for the user", "t": "`$INTEGER`", "key$": "id", "index$": 3 }, "name": { "a": true, "h": "Name", "n": "name", "r": false, "sh": "Full name of the user", "t": "`$STRING`", "key$": "name", "index$": 4 }, "phone": { "a": true, "h": "Phone", "n": "phone", "r": false, "sh": "Phone number of the user", "t": "`$STRING`", "key$": "phone", "index$": 5 }, "username": { "a": true, "h": "Username", "n": "username", "r": false, "sh": "Username of the user", "t": "`$STRING`", "key$": "username", "index$": 6 }, "website": { "a": true, "fo": "uri", "h": "Website", "n": "website", "r": false, "sh": "Personal website URL", "t": "`$STRING`", "key$": "website", "index$": 7 } }, "id": { "field": "id", "name": "id" }, "name": "user", "op": { "list": { "input": "data", "name": "list", "points": [{ "a": true, "co": { "id": "GET /users", "source": "openapi3", "version": 2 }, "g": { "query": [{ "a": true, "ex": 10, "k": "query", "n": "limit", "or": "limit", "r": false, "t": "`$INTEGER`", "index$": 0 }, { "a": true, "ex": 1, "k": "query", "n": "page", "or": "page", "r": false, "t": "`$INTEGER`", "index$": 1 }] }, "k": "http", "m": "GET", "o": "/users", "q": { "exist": ["limit", "page"] }, "r": {}, "s": [{ "lit": "users" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "list" }, "load": { "input": "data", "name": "load", "points": [{ "a": true, "co": { "id": "GET /users/{id}", "source": "openapi3", "version": 2 }, "g": { "params": [{ "a": true, "k": "param", "n": "id", "or": "id", "r": true, "t": "`$INTEGER`", "index$": 0 }] }, "k": "http", "m": "GET", "o": "/users/{id}", "q": { "exist": ["id"] }, "r": {}, "s": [{ "lit": "users" }, { "var": "id" }], "t": { "req": "`reqdata`", "res": "`body`" }, "index$": 0 }], "key$": "load" } }, "relations": { "ancestors": [] }, "key$": "user", "name__orig": "user", "Name": "User", "name_": "user", "name-": "user", "NAME": "USER", "index$": 1 }, { "active": true, "entity": "user", "key$": "BasicUserFlow", "kind": "basic", "name": "BasicUserFlow", "param": {}, "step": [{ "a": true, "d": {}, "i": {}, "m": {}, "o": "list", "s": [], "v": [{ "apply": "ItemExists", "def": { "ref": "user_ref01" } }], "index$": 0 }, { "a": true, "d": {}, "i": { "ref": "user_ref01", "srcdatavar": "user_ref01_data", "suffix": "_dt0" }, "m": { "id": "user01" }, "o": "load", "s": [], "v": [{ "apply": "TextFieldMark", "def": { "mark": "Mark01-user_ref01" } }], "index$": 1 }] }, 'User', { "GET /users": { "protocol": "http", "operationId": "getAllUsers", "responses": { "200": { "description": "Successful response with list of users", "content": { "application/json": { "schema": { "type": "array", "items": { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "description": "Unique identifier for the user", "example": 1, "key$": "id" }, "name": { "type": "string", "description": "Full name of the user", "example": "John Doe", "key$": "name" }, "email": { "type": "string", "format": "email", "description": "Email address of the user", "example": "john.doe@example.com", "key$": "email" }, "username": { "type": "string", "description": "Username of the user", "example": "johndoe", "key$": "username" }, "phone": { "type": "string", "description": "Phone number of the user", "example": "+1-234-567-8900", "key$": "phone" }, "address": { "type": "object", "properties": { "street": { "type": "string", "example": "123 Main St" }, "city": { "type": "string", "example": "New York" }, "state": { "type": "string", "example": "NY" }, "zipcode": { "type": "string", "example": "10001" }, "country": { "type": "string", "example": "USA" } }, "key$": "address" }, "website": { "type": "string", "format": "uri", "description": "Personal website URL", "example": "https://johndoe.com", "key$": "website" }, "company": { "type": "object", "properties": { "name": { "type": "string", "example": "Tech Corp" }, "catchPhrase": { "type": "string", "example": "Innovation at its best" }, "bs": { "type": "string", "example": "synergize innovative solutions" } }, "key$": "company" } }, "x-ref": "#/components/schemas/User", "index$": 0 } } } } }, "400": { "description": "Bad request - Invalid parameters", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Resource not found" }, "status": { "type": "integer", "description": "HTTP status code", "example": 404 }, "message": { "type": "string", "description": "Detailed error description", "example": "The requested resource could not be found" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Resource not found" }, "status": { "type": "integer", "description": "HTTP status code", "example": 404 }, "message": { "type": "string", "description": "Detailed error description", "example": "The requested resource could not be found" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "limit", "in": "query", "description": "Limit the number of results returned", "required": false, "schema": { "type": "integer", "default": 10, "minimum": 1, "maximum": 100 }, "index$": 0 }, { "name": "page", "in": "query", "description": "Page number for pagination", "required": false, "schema": { "type": "integer", "default": 1, "minimum": 1 }, "index$": 1 }], "securitySource": "unspecified" }, "GET /users/{id}": { "protocol": "http", "operationId": "getUserById", "responses": { "200": { "description": "Successful response with user details", "content": { "application/json": { "schema": { "type": "object", "properties": { "id": { "type": "integer", "format": "int64", "description": "Unique identifier for the user", "example": 1, "key$": "id" }, "name": { "type": "string", "description": "Full name of the user", "example": "John Doe", "key$": "name" }, "email": { "type": "string", "format": "email", "description": "Email address of the user", "example": "john.doe@example.com", "key$": "email" }, "username": { "type": "string", "description": "Username of the user", "example": "johndoe", "key$": "username" }, "phone": { "type": "string", "description": "Phone number of the user", "example": "+1-234-567-8900", "key$": "phone" }, "address": { "type": "object", "properties": { "street": { "type": "string", "example": "123 Main St" }, "city": { "type": "string", "example": "New York" }, "state": { "type": "string", "example": "NY" }, "zipcode": { "type": "string", "example": "10001" }, "country": { "type": "string", "example": "USA" } }, "key$": "address" }, "website": { "type": "string", "format": "uri", "description": "Personal website URL", "example": "https://johndoe.com", "key$": "website" }, "company": { "type": "object", "properties": { "name": { "type": "string", "example": "Tech Corp" }, "catchPhrase": { "type": "string", "example": "Innovation at its best" }, "bs": { "type": "string", "example": "synergize innovative solutions" } }, "key$": "company" } }, "x-ref": "#/components/schemas/User", "index$": 0 } } } }, "404": { "description": "User not found", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Resource not found" }, "status": { "type": "integer", "description": "HTTP status code", "example": 404 }, "message": { "type": "string", "description": "Detailed error description", "example": "The requested resource could not be found" } }, "x-ref": "#/components/schemas/Error" } } } }, "500": { "description": "Internal server error", "content": { "application/json": { "schema": { "type": "object", "properties": { "error": { "type": "string", "description": "Error message", "example": "Resource not found" }, "status": { "type": "integer", "description": "HTTP status code", "example": 404 }, "message": { "type": "string", "description": "Detailed error description", "example": "The requested resource could not be found" } }, "x-ref": "#/components/schemas/Error" } } } } }, "parameters": [{ "name": "id", "in": "path", "description": "Unique identifier of the user", "required": true, "schema": { "type": "integer", "format": "int64" }, "index$": 0 }], "securitySource": "unspecified" } });
        }
        const client = setup.client;
        const struct = setup.struct;
        const isempty = struct.isempty;
        const select = struct.select;
        let user_ref01_data = Object.values(setup.data.existing.user)[0];
        // LIST
        const user_ref01_ent = client.User();
        const user_ref01_match = {};
        const user_ref01_list = (await user_ref01_ent.list(user_ref01_match)).map((e) => e.data());
        // LOAD
        const user_ref01_match_dt0 = {};
        user_ref01_match_dt0.id = user_ref01_data.id;
        const user_ref01_data_dt0 = (await user_ref01_ent.load(user_ref01_match_dt0)).data();
        (0, node_assert_1.default)(user_ref01_data_dt0.id === user_ref01_data.id);
    });
});
function basicSetup(extra) {
    // TODO: fix test def options
    const options = {}; // null
    // TODO: needs test utility to resolve path
    const entityDataFile = node_path_1.default.resolve(__dirname, '../../../../.sdk/test/entity/user/UserTestData.json');
    // TODO: file ready util needed?
    const entityDataSource = Fs.readFileSync(entityDataFile).toString('utf8');
    // TODO: need a xlang JSON parse utility in voxgig/struct with better error msgs
    const entityData = JSON.parse(entityDataSource);
    options.entity = entityData.existing;
    let client = __1.FreetestapiSDK.test(options, extra);
    const struct = client.utility().struct;
    const merge = struct.merge;
    const transform = struct.transform;
    let idmap = transform(['user01', 'user02', 'user03'], {
        '`$PACK`': ['', {
                '`$KEY`': '`$COPY`',
                '`$VAL`': ['`$FORMAT`', 'upper', '`$COPY`']
            }]
    });
    const env = (0, utility_1.envOverride)({
        'FREETESTAPI_TEST_USER_ENTID': idmap,
        'FREETESTAPI_TEST_LIVE': 'FALSE',
        'FREETESTAPI_TEST_EXPLAIN': 'FALSE',
    });
    idmap = env['FREETESTAPI_TEST_USER_ENTID'];
    const live = 'TRUE' === env.FREETESTAPI_TEST_LIVE;
    const transport = (0, live_runner_1.createLiveTransport)();
    if (live) {
        const rawIds = process.env['FREETESTAPI_TEST_USER_ENTID'];
        idmap = rawIds && rawIds.trim() ? JSON.parse(rawIds) : {};
        if (!idmap || Array.isArray(idmap) || typeof idmap !== 'object') {
            throw new Error('Live ENTID must be a JSON object');
        }
        client = new __1.FreetestapiSDK(merge([
            // FIRST, so the generated fields below win: sdk-test-control.json's
            // test.client.options adds to the live client, it does not redirect it.
            (0, utility_1.liveClientOptions)(),
            {},
            // 'extra || {}', not a bare 'extra': struct.merge returns UNDEFINED when the
            // last entry is undefined, and basicSetup is normally called with no
            // argument at all - so a bare 'extra' silently discarded the apikey
            // and server values above and handed the SDK undefined. Harmless
            // while there was nothing in that object; not harmless now.
            extra || {},
            { system: { fetch: transport.fetch } }
        ]));
    }
    const setup = {
        idmap,
        env,
        options,
        client,
        struct,
        data: entityData,
        explain: 'TRUE' === env.FREETESTAPI_TEST_EXPLAIN,
        live,
        transport,
        now: Date.now(),
    };
    return setup;
}
//# sourceMappingURL=UserEntity.test.js.map