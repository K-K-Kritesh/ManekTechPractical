"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const redux_1 = require("redux");
const login_reducer_1 = __importDefault(require("./login.reducer"));
exports.default = (0, redux_1.combineReducers)({
    LoginReducer: login_reducer_1.default,
});
//# sourceMappingURL=index.js.map