import React from 'react';
import DefaultButton from './Button';
import { View } from 'react-native';

const GenerateBtn = ({ quote,styles }) => {
  return (
    <>
      <View style={[,styles]}>
        <DefaultButton onPress={() => quote.handleGetQuote()}>
          {'Generate'}
        </DefaultButton>
      </View>
    </>
  );
};

export default GenerateBtn;
