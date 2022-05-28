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
const yup = __importStar(require("yup"));
const formik_1 = require("formik");
const Components_1 = require("../Components");
const Fonts_1 = __importDefault(require("../Services/Fonts"));
const { width, height } = react_native_1.Dimensions.get('window');
const LoginScreen = (props) => {
    const [isPortrait, setPortrait] = React.useState(true);
    const LoginAccount = (values) => {
        props.navigation.navigate('Home', {});
    };
    const loginValidationSchema = yup.object().shape({
        username: yup
            .string()
            .email('Please enter valid email')
            .required('Email Address is Required')
            .test('Unique Email', 'The email you entered does not belong to an account', value => {
            return value === 'test@gmail.com';
        }),
        password: yup
            .string()
            .min(8, ({ min }) => `Password must be at least ${min} characters`)
            .required('Password is required')
            .test('Unique Password', 'The password you entered does not belong to an account', value => {
            return value === '12345678';
        }),
    });
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
    return (<>
      <react_native_1.Text style={styles.header}>Restaurant</react_native_1.Text>
      <react_native_1.View style={isPortrait ? styles.LoginContainer : styles.LoginContainerLandscape}>
        <react_native_1.Text style={styles.LoginLabel}>Login</react_native_1.Text>
        <formik_1.Formik validationSchema={loginValidationSchema} initialValues={{
            username: '',
            password: '',
        }} onSubmit={values => {
            LoginAccount(values);
        }}>
          {({ handleChange, handleBlur, handleSubmit, errors, values }) => (<react_native_1.View style={isPortrait ? {} : styles.landscapeForm}>
              <react_native_1.View style={{ margin: 10 }}>
                <react_native_1.Text style={styles.font}>Email</react_native_1.Text>
                <Components_1.TextInputComponent value={values.username} onChangeText={handleChange('username')} placeHolder={'Email'} isSecure={false} keyboeardType={'email-address'}/>
                <react_native_1.Text style={styles.error}>
                  {errors.username && errors.username}
                </react_native_1.Text>
              </react_native_1.View>

              <react_native_1.View style={{ margin: 10 }}>
                <react_native_1.Text style={styles.font}>Password</react_native_1.Text>
                <Components_1.TextInputComponent value={values.password} onChangeText={handleChange('password')} placeHolder={'Password'} isSecure={true} keyboeardType={'default'}/>
                <react_native_1.Text style={styles.error}>
                  {errors.password && errors.password}
                </react_native_1.Text>
              </react_native_1.View>
              <react_native_1.View style={{ margin: 10 }}>
                <react_native_1.Button title="Login" onPress={() => handleSubmit()} color={'orange'}/>
              </react_native_1.View>
            </react_native_1.View>)}
        </formik_1.Formik>
      </react_native_1.View>
    </>);
};
const styles = react_native_1.StyleSheet.create({
    error: {
        color: 'red',
        fontSize: 11,
        fontFamily: Fonts_1.default.type.DemiBold,
    },
    header: {
        width: '100%',
        textAlign: 'center',
        backgroundColor: '#27dd93',
        padding: 15,
        fontSize: 20,
        color: 'white',
        fontFamily: Fonts_1.default.type.Regular,
    },
    LoginContainer: {
        height: '80%',
        justifyContent: 'center',
        marginHorizontal: width * 0.1,
    },
    LoginContainerLandscape: {
        height: '80%',
        justifyContent: 'space-around',
        marginHorizontal: width * 0.1,
        alignItems: 'center',
        flexDirection: 'row',
    },
    landscapeForm: {
        width: '50%',
    },
    LoginLabel: {
        color: 'black',
        fontSize: 25,
        fontWeight: 'bold',
        marginVertical: 10,
        fontFamily: Fonts_1.default.type.Regular,
    },
    font: { fontFamily: Fonts_1.default.type.Regular },
});
exports.default = LoginScreen;
//# sourceMappingURL=LoginScreen.js.map