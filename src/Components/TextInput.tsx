import * as React from 'react';
import {KeyboardType, StyleSheet, TextInput} from 'react-native';
import Fonts from '../Services/Fonts';

type TextInputParam = {
  value: string;
  onChangeText: (value: string) => void;
  placeHolder: string;
  isSecure: boolean;
  keyboeardType: KeyboardType;
};

const TextInputComponent = (props: TextInputParam) => {
  const {
    value = '',
    onChangeText,
    placeHolder,
    isSecure = false,
    keyboeardType = 'email-address',
  } = props;

  return (
    <TextInput
      value={value}
      onChangeText={onChangeText}
      placeholder={placeHolder}
      keyboardType={keyboeardType}
      secureTextEntry={isSecure}
      style={styles.input}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'gray',
    backgroundColor:'white',
    elevation: 3,
    borderWidth: 0,
    borderRadius: 5,
    padding: 5,
    fontFamily: Fonts.type.Regular,
  },
});

export default TextInputComponent;
