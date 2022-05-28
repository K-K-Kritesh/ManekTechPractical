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
const ramda_1 = require("ramda");
const react_native_maps_1 = __importStar(require("react-native-maps"));
const react_native_maps_directions_1 = __importDefault(require("react-native-maps-directions"));
const Services_1 = require("../Services");
const Fonts_1 = __importDefault(require("../Services/Fonts"));
const GOOGLE_MAP_KEY = '';
const MapTiView = (props) => {
    const { image = '', rating = 1, title = '' } = props;
    console.log(props);
    return (<react_native_1.View style={{ flexDirection: 'row' }}>
      <react_native_1.View style={{ marginTop: -5 }}>
        <react_native_1.Text style={{ height: 40 }}>
          <react_native_1.Image style={{ width: 30, height: 30, alignSelf: 'center' }} resizeMode="contain" source={require('../../assets/map_img.png')}/>
        </react_native_1.Text>
      </react_native_1.View>
      <react_native_1.View style={{
            height: 40,
            marginHorizontal: 5,
        }}>
        <react_native_1.Text style={styles.name}>{title}</react_native_1.Text>
        <react_native_1.Text style={styles.name}> Rating: {rating} </react_native_1.Text>
        
      </react_native_1.View>
    </react_native_1.View>);
};
const MapScreen = (props) => {
    const param = (0, ramda_1.pathOr)({}, ['route', 'params'], props);
    const [Location, setLocation] = React.useState({
        latitude: 0.0,
        longitude: 0.0,
    });
    const marref = React.useRef(null);
    React.useEffect(() => {
        (0, Services_1.CurrentLocation)(latlng => {
            setLocation(latlng);
        });
    }, []);
    React.useState(() => {
        const unsubscribe = props.navigation.addListener('focus', () => {
            if (marref.current) {
                // @ts-ignore: Object is possibly 'null'.
                marref.current.hideCallout();
            }
        });
        return unsubscribe;
    });
    const latitude = Number((0, ramda_1.propOr)(0.0, 'latitude', param));
    const longitude = Number((0, ramda_1.propOr)(0.0, 'longitude', param));
    const title = (0, ramda_1.propOr)('', 'title', param);
    const rating = Number((0, ramda_1.propOr)(0, 'rating', param));
    const image = (0, ramda_1.propOr)('', 'img', param);
    const destination = {
        latitude: Location.latitude,
        longitude: Location.longitude,
    };
    return (<react_native_1.View style={{ flex: 1 }}>
      <react_native_maps_1.default style={styles.map} region={{
            latitude: Location.latitude,
            longitude: Location.longitude,
            latitudeDelta: 5.115,
            longitudeDelta: 5.121,
        }}>
        <react_native_maps_1.Marker ref={marref} coordinate={{ latitude: latitude, longitude: longitude }}>
          <react_native_1.Image source={require('../../assets/shop_pin.png')} style={{ width: 35, height: 35 }} resizeMode="contain"/>
          <react_native_maps_1.Callout tooltip>
            <react_native_1.View>
              <react_native_1.View style={styles.bubble}>
                <MapTiView title={title} rating={rating} image={image}/>
              </react_native_1.View>
              <react_native_1.View style={styles.arrowBorder}/>
              <react_native_1.View style={styles.arrow}/>
            </react_native_1.View>
          </react_native_maps_1.Callout>
        </react_native_maps_1.Marker>
        <react_native_maps_1.Marker coordinate={{
            latitude: Location.latitude,
            longitude: Location.longitude,
        }}>
          <react_native_1.Image source={require('../../assets/location_pin.png')} style={{ width: 35, height: 35 }} resizeMode="contain"/>
        </react_native_maps_1.Marker>
        <react_native_maps_directions_1.default origin={{
            latitude: latitude,
            longitude: longitude,
        }} destination={destination} strokeWidth={3} strokeColor={'#27dd93'} apikey={GOOGLE_MAP_KEY}/>
      </react_native_maps_1.default>
    </react_native_1.View>);
};
const styles = react_native_1.StyleSheet.create({
    map: {
        ...react_native_1.StyleSheet.absoluteFillObject,
    },
    bubble: {
        flexDirection: 'column',
        alignSelf: 'flex-start',
        backgroundColor: '#fff',
        borderRadius: 6,
        borderColor: '#ccc',
        borderWidth: 0.5,
        padding: 10,
        width: 180,
        height: 60,
    },
    // Arrow below the bubble
    arrow: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#fff',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -32,
    },
    arrowBorder: {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderTopColor: '#007a87',
        borderWidth: 16,
        alignSelf: 'center',
        marginTop: -0.5,
        // marginBottom: -15
    },
    // Character name
    name: {
        fontSize: 10,
        fontFamily: Fonts_1.default.type.Regular,
    },
    // Character image
    image: {
        width: 30,
        height: 30,
    },
});
exports.default = MapScreen;
//# sourceMappingURL=MapScreen.js.map