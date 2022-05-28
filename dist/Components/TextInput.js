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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const Fonts_1 = __importDefault(require("../Services/Fonts"));
const TextInputComponent = (props) => {
    const { value = '', onChangeText, placeHolder, isSecure = false, keyboeardType = 'email-address', } = props;
    return (<react_native_1.TextInput value={value} onChangeText={onChangeText} placeholder={placeHolder} keyboardType={keyboeardType} secureTextEntry={isSecure} style={styles.input}/>);
};
const styles = react_native_1.StyleSheet.create({
    input: {
        borderColor: 'gray',
        backgroundColor: 'white',
        elevation: 3,
        borderWidth: 0,
        borderRadius: 5,
        padding: 5,
        fontFamily: Fonts_1.default.type.Regular,
    },
});
exports.default = TextInputComponent;
//# sourceMappingURL=TextInput.js.map