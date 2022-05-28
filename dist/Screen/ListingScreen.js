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
const React = __importStar(require("react"));
const react_native_1 = require("react-native");
const react_redux_1 = require("react-redux");
const Components_1 = require("../Components");
const ramda_1 = require("ramda");
const ListingScreen = (props) => {
    const state = (0, react_redux_1.useSelector)(states => states);
    const RestaurantList = (0, ramda_1.pathOr)([], ['LoginReducer', 'AllData'], state);
    return (<react_native_1.View>
      <react_native_1.FlatList data={RestaurantList} renderItem={({ item }) => (<react_native_1.TouchableOpacity activeOpacity={1} onPress={() => {
                props.navigation.navigate('Map', item);
            }}>
            <Components_1.RestaurantComoponent hotelName={item.title} rating={Number(item.rating)} image={item.img}/>
          </react_native_1.TouchableOpacity>)}/>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({});
exports.default = ListingScreen;
//# sourceMappingURL=ListingScreen.js.map