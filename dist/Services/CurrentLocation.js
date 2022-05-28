"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_get_location_1 = __importDefault(require("react-native-get-location"));
const CurrentLocation = (C_Location) => {
    react_native_get_location_1.default.getCurrentPosition({
        enableHighAccuracy: true,
        timeout: 15000,
    })
        .then(location => {
        C_Location(location);
    })
        .catch(error => {
        const { code, message } = error;
        console.warn(code, message);
    });
};
exports.default = CurrentLocation;
//# sourceMappingURL=CurrentLocation.js.map