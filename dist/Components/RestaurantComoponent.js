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
const react_native_ratings_1 = require("react-native-ratings");
const EvilIcons_1 = __importDefault(require("react-native-vector-icons/EvilIcons"));
const Fonts_1 = __importDefault(require("../Services/Fonts"));
const RestaurantComoponent = (props) => {
    const { hotelName = '', rating = 4, image = '' } = props;
    const images = image.split(',');
    return (<react_native_1.View style={styles.mainContainer}>
      <react_native_1.View style={styles.hotelContainer}>
        <react_native_1.Image style={styles.hotelImage} source={{
            uri: images[0],
        }}/>
        <react_native_1.View style={{ marginHorizontal: 20 }}>
          <react_native_1.Text style={styles.hotelTitle}>{hotelName}</react_native_1.Text>
          <react_native_ratings_1.Rating startingValue={rating} ratingCount={5} imageSize={15} showRating={false} style={{ alignSelf: 'flex-start' }}/>
        </react_native_1.View>
      </react_native_1.View>
      <EvilIcons_1.default name="location" style={styles.IconContainer}/>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    mainContainer: {
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: 'white',
        padding: 10,
        flexDirection: 'row',
        borderRadius: 10,
        justifyContent: 'space-between',
    },
    IconContainer: {
        fontSize: 20,
        color: 'white',
        height: 30,
        width: 30,
        backgroundColor: '#27dd93',
        textAlign: 'center',
        textAlignVertical: 'center',
        borderRadius: 5,
        alignSelf: 'center',
    },
    hotelTitle: {
        width: 150,
        marginStart: 3,
        marginBottom: 3,
        fontFamily: Fonts_1.default.type.Regular,
    },
    hotelImage: { width: 50, height: 50, borderRadius: 5 },
    hotelContainer: { flexDirection: 'row', alignItems: 'center' },
});
exports.default = React.memo(RestaurantComoponent);
//# sourceMappingURL=RestaurantComoponent.js.map