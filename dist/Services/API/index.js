"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiHandler = exports.initApiConfig = void 0;
var api_config_1 = require("./api.config");
Object.defineProperty(exports, "initApiConfig", { enumerable: true, get: function () { return __importDefault(api_config_1).default; } });
var restaurant_api_1 = require("./restaurant.api");
Object.defineProperty(exports, "ApiHandler", { enumerable: true, get: function () { return __importDefault(restaurant_api_1).default; } });
//# sourceMappingURL=index.js.map