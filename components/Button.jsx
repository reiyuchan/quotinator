import React from 'react';
import { Button, TouchableOpacity } from 'react-native';
import { global } from '../styles/global';
import DefaultText from './DefaultText';

const DefaultButton = ({ children, onPress,styleText,styleBtn }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress} style={[global.button,styleBtn]}>
        <DefaultText styles={styleText}>{children}</DefaultText>
      </TouchableOpacity>
    </>
  );
};

export default DefaultButton;
