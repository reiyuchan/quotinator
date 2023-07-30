import React from 'react';
import { Image, View } from 'react-native';
import titlePng from '../assets/quotinator.png'

const Title = () => {
  return (
    <>
      <View style={[global.container,{position: 'absolute',top: 20,}]}>
        <Image source={titlePng} style={{ width: 300, height: 36, marginBottom: 70, marginTop: 50 }}/>
      </View>
    </>
  );
};

export default Title;
