import React from 'react';
import { View } from 'react-native';
import DefaultText from './DefaultText';
import { global } from '../styles/global';

const Toast = () => {
  return (
    <>
      <View style={global.toast}>
        <DefaultText styles={{ opacity: 1, color: 'white'}}>
          {'Successfully copied to clipboard..!'}
        </DefaultText>
      </View>
    </>
  );
};

export default Toast;
