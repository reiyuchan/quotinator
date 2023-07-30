import React from 'react';
import { View } from 'react-native';
import DefaultText from './DefaultText';
import { global } from '../styles/global';

const Card = ({ quote }) => {
  return (
    <>
      <View style={[global.card,{marginTop: 90}]}>
        <DefaultText
          styles={{
            fontSize: 28,
            marginBottom: 30,
            width: '95%',
            padding: 4,
          }}
        >
          {quote.quote.quote}
        </DefaultText>
        <DefaultText styles={{ fontSize: 24, width: '100%' }}>
          {quote.quote.author && `- ${quote.quote.author}`}
        </DefaultText>
      </View>
    </>
  );
};

export default Card;
