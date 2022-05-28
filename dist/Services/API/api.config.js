"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.axiosInstance = void 0;
const axios_1 = __importDefault(require("axios"));
const axios_hooks_1 = require("axios-hooks");
const lru_cache_1 = __importDefault(require("lru-cache"));
const BASE_URL = 'http://205.134.254.135/~mobile/interview/public/api/';
const cache = new lru_cache_1.default({ max: 10 });
const initApiConfig = () => {
    exports.axiosInstance = axios_1.default.create({
        baseURL: `${BASE_URL}`,
        timeout: 60000,
        headers: {
            'Content-Type': 'application/json',
        },
    });
    (0, axios_hooks_1.configure)({ axios: exports.axiosInstance, cache });
};
exports.default = initApiConfig;
//# sourceMappingURL=api.config.js.map