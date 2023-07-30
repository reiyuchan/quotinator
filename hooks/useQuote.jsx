import React, { useEffect, useState } from 'react';
import data from '../data/quotes.json';

const useQuote = () => {
  const [quote, setQuote] = useState({});
  const handleGetQuote = () => {
    setQuote(data[Math.floor(Math.random() * data.length)]);
  };

  useEffect(() => {
    if (!quote.quote) handleGetQuote();
  }, [handleGetQuote]);

  return { quote, handleGetQuote };
};

export default useQuote;
