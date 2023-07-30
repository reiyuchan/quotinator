import React from 'react';
import { Text } from 'react-native';
import { global } from '../styles/global';

const DefaultText = ({ styles, children }) => {
  return (
    <>
      <Text style={[global.innerText,styles]}>{children}</Text>
    </>
  );
};

export default DefaultText;
