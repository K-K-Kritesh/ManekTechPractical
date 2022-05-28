"use strict";
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */
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
const native_1 = require("@react-navigation/native");
const stack_1 = require("@react-navigation/stack");
const react_native_1 = require("react-native");
const NewAppScreen_1 = require("react-native/Libraries/NewAppScreen");
const react_redux_1 = require("react-redux");
const Screen_1 = require("./Screen");
const store_1 = __importDefault(require("./redux/store"));
const Services_1 = require("./Services");
const App = () => {
    const isDarkMode = (0, react_native_1.useColorScheme)() === 'dark';
    (0, Services_1.initApiConfig)();
    const backgroundStyle = {
        backgroundColor: isDarkMode ? NewAppScreen_1.Colors.darker : NewAppScreen_1.Colors.lighter,
        flex: 1,
    };
    Services_1.SQLiteUtils.CreateTable(Services_1.SQLiteUtils.db);
    const Stack = (0, stack_1.createStackNavigator)();
    return (<react_redux_1.Provider store={store_1.default}>
      <react_native_1.SafeAreaView style={backgroundStyle}>
        <react_native_1.StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={'#27dd93'}/>
        <native_1.NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Login" component={Screen_1.LoginScreen}/>
            <Stack.Screen name="Home" component={Screen_1.MainScreen}/>
          </Stack.Navigator>
        </native_1.NavigationContainer>
      </react_native_1.SafeAreaView>
    </react_redux_1.Provider>);
};
exports.default = App;
//# sourceMappingURL=App.js.map