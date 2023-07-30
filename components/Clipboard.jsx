import React, { useCallback, useEffect, useState } from 'react';
import { View, Animated } from 'react-native';
import DefaultButton from './Button';
import Toast from './Toast';
import { global } from '../styles/global';
import * as ClipboardModule from 'expo-clipboard';

const Clipboard = ({ isCopied, setIsCopied, quote }) => {
  const handleToast = () => {
    isCopied ? null : setIsCopied(!isCopied);
  };

  const handleClipboard = () => {
    ClipboardModule.setStringAsync(`${quote.quote.quote}\n - ${quote.quote.author}`);
    handleToast();
  };

  const handleToastTimer = useCallback(() => {
    const timer = setTimeout(
      () => (isCopied ? setIsCopied(false) : null),
      1500
    );
    return () => clearTimeout(timer);
  }, [isCopied]);

  const handleControlsView = useCallback(() => {}, [isCopied]);

  useEffect(() => {
    handleToastTimer();
    handleControlsView();
  }, [handleToastTimer, handleControlsView]);

  return (
    <>
      <View>
        <Animated.View>{isCopied && <Toast />}</Animated.View>
        <DefaultButton
          onPress={handleClipboard}
          styleBtn={[{ position: 'relative', width: '100%' }]}
        >
          Copy to Clipboard
        </DefaultButton>
      </View>
    </>
  );
};

export default Clipboard;
