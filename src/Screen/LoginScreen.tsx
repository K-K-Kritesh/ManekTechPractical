import * as React from 'react';
import {
  Button,
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import * as yup from 'yup';
import {Formik} from 'formik';
import {TextInputComponent} from '../Components';
import Fonts from '../Services/Fonts';

const {width, height} = Dimensions.get('window');
const LoginScreen = (props: any) => {
  const [isPortrait, setPortrait] = React.useState(true);


  const LoginAccount = (values: any) => {
    props.navigation.navigate('Home', {});
  };

  const loginValidationSchema = yup.object().shape({
    username: yup
      .string()
      .email('Please enter valid email')
      .required('Email Address is Required')
      .test(
        'Unique Email',
        'The email you entered does not belong to an account',
        value => {
          return value === 'test@gmail.com';
        },
      ),
    password: yup
      .string()
      .min(8, ({min}) => `Password must be at least ${min} characters`)
      .required('Password is required')
      .test(
        'Unique Password',
        'The password you entered does not belong to an account',
        value => {
          return value === '12345678';
        },
      ),
  });

  React.useEffect(() => {
    Dimensions.addEventListener('change', ({window: {width, height}}) => {
      if (width < height) {
        setPortrait(true);
      } else {
        setPortrait(false);
      }
    });
  }, []);

  return (
    <>
      <Text style={styles.header}>Restaurant</Text>
      <View
        style={
          isPortrait ? styles.LoginContainer : styles.LoginContainerLandscape
        }>
        <Text style={styles.LoginLabel}>Login</Text>
        <Formik
          validationSchema={loginValidationSchema}
          initialValues={{
            username: '',
            password: '',
          }}
          onSubmit={values => {
            LoginAccount(values);
          }}>
          {({handleChange, handleBlur, handleSubmit, errors, values}) => (
            <View style={isPortrait ? {} : styles.landscapeForm}>
              <View style={{margin: 10}}>
                <Text style={styles.font}>Email</Text>
                <TextInputComponent
                  value={values.username}
                  onChangeText={handleChange('username')}
                  placeHolder={'Email'}
                  isSecure={false}
                  keyboeardType={'email-address'}
                />
                <Text style={styles.error}>
                  {errors.username && (errors.username as string)}
                </Text>
              </View>

              <View style={{margin: 10}}>
                <Text style={styles.font}>Password</Text>
                <TextInputComponent
                  value={values.password}
                  onChangeText={handleChange('password')}
                  placeHolder={'Password'}
                  isSecure={true}
                  keyboeardType={'default'}
                />
                <Text style={styles.error}>
                  {errors.password && (errors.password as string)}
                </Text>
              </View>
              <View style={{margin: 10}}>
                <Button
                  title="Login"
                  onPress={() => handleSubmit()}
                  color={'orange'}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  error: {
    color: 'red',
    fontSize: 11,
    fontFamily: Fonts.type.DemiBold,
  },
  header: {
    width: '100%',
    textAlign: 'center',
    backgroundColor: '#27dd93',
    padding: 15,
    fontSize: 20,
    color: 'white',
    fontFamily: Fonts.type.Regular,
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
    fontFamily: Fonts.type.Regular,
  },
  font: {fontFamily: Fonts.type.Regular},
});

export default LoginScreen;
