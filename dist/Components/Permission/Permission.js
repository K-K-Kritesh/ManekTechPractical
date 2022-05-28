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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_native_1 = require("react-native");
const permissions = __importStar(require("react-native-permissions"));
const react_native_permissions_1 = require("react-native-permissions");
const CheckPermission = () => {
    permissions
        .check(react_native_1.Platform.OS === 'android'
        ? react_native_permissions_1.PERMISSIONS.ANDROID.CAMERA
        : react_native_permissions_1.PERMISSIONS.IOS.CAMERA)
        .then(result => {
        switch (result) {
            case react_native_permissions_1.RESULTS.DENIED:
                RequestPermission(react_native_1.Platform.OS === 'android'
                    ? react_native_permissions_1.PERMISSIONS.ANDROID.CAMERA
                    : react_native_permissions_1.PERMISSIONS.IOS.CAMERA);
        }
        console.log(result);
    });
    permissions
        .check(react_native_1.Platform.OS === 'android'
        ? react_native_permissions_1.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
        : react_native_permissions_1.PERMISSIONS.IOS.PHOTO_LIBRARY)
        .then(result => {
        switch (result) {
            case react_native_permissions_1.RESULTS.DENIED:
                RequestPermission(react_native_1.Platform.OS === 'android'
                    ? react_native_permissions_1.PERMISSIONS.ANDROID.WRITE_EXTERNAL_STORAGE
                    : react_native_permissions_1.PERMISSIONS.IOS.PHOTO_LIBRARY);
        }
        console.log(result);
    });
};
const RequestPermission = (permission) => {
    (0, react_native_permissions_1.request)(permission).then(result => {
        console.log(result);
    });
};
exports.default = { RequestPermission, CheckPermission };
//# sourceMappingURL=Permission.js.map