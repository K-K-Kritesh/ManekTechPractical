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
const react_native_1 = require("react-native");
const React = __importStar(require("react"));
const bottom_tabs_1 = require("@react-navigation/bottom-tabs");
const ListingScreen_1 = __importDefault(require("./ListingScreen"));
const MaterialIcons_1 = __importDefault(require("react-native-vector-icons/MaterialIcons"));
const MapScreen_1 = __importDefault(require("./MapScreen"));
const Actions_1 = require("../Actions");
const react_redux_1 = require("react-redux");
const Fonts_1 = __importDefault(require("../Services/Fonts"));
const Tab = (0, bottom_tabs_1.createBottomTabNavigator)();
const getCustomHeader = (route) => {
    return {
        header: () => (<react_native_1.View style={styles.header}>
        <react_native_1.Text style={{
                fontSize: 20,
                color: 'white',
                fontFamily: Fonts_1.default.type.Regular,
            }}>
          {route.name === 'Listing' ? 'Restaurant List' : 'Map View'}
        </react_native_1.Text>
      </react_native_1.View>),
    };
};
const MainScreen = () => {
    const dispatch = (0, react_redux_1.useDispatch)();
    const [isPortrait, setPortrait] = React.useState(true);
    React.useEffect(() => {
        dispatch((0, Actions_1.SearchRestaurantName)());
    }, []);
    React.useEffect(() => {
        react_native_1.Dimensions.addEventListener('change', ({ window: { width, height } }) => {
            if (width < height) {
                setPortrait(true);
            }
            else {
                setPortrait(false);
            }
        });
    }, []);
    return (<Tab.Navigator screenOptions={({ route }) => ({
            ...getCustomHeader(route),
            tabBarShowLabel: false,
            tabBarStyle: {
                position: isPortrait ? 'absolute' : 'relative',
                bottom: isPortrait ? 10 : 0,
                margin: isPortrait ? 20 : 0,
                borderRadius: isPortrait ? 30 : 0,
            },
        })}>
      <Tab.Screen name="Listing" component={ListingScreen_1.default} options={{
            tabBarIcon: route => (<MaterialIcons_1.default name="view-list" style={{ fontSize: 25, color: route.focused ? '#27dd93' : 'gray' }}/>),
        }}/>
      <Tab.Screen name="Map" component={MapScreen_1.default} options={{
            tabBarIcon: route => (<MaterialIcons_1.default name="map" style={{ fontSize: 25, color: route.focused ? '#27dd93' : 'gray' }}/>),
        }}/>
    </Tab.Navigator>);
};
const styles = react_native_1.StyleSheet.create({
    header: {
        height: 40,
        backgroundColor: '#27dd93',
        justifyContent: 'center',
        alignItems: 'center',
    },
});
exports.default = MainScreen;
//# sourceMappingURL=MainScreen.js.map