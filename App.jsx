import { global } from './styles/global';
import { useState } from 'react';
import Card from './components/Card';
import GenerateBtn from './components/GenerateBtn';
import useQuote from './hooks/useQuote';
import Title from './components/Title';
import Clipboard from './components/Clipboard';

export default function App() {
  const quote = useQuote();
  const [isCopied, setIsCopied] = useState(false);

  return (
    <View style={global.container}>
      <Title />
      {quote.quote.quote && <Card quote={quote} />}
      <View
        style={[
          { flexDirection: 'row', gap: 50, position: 'absolute', bottom: 100 },
        ]}
      >
        <GenerateBtn styles={{ zIndex: 100 }} quote={quote} />
        {quote.quote.quote && <Clipboard setIsCopied={setIsCopied} isCopied={isCopied} quote={quote} />}
      </View>
    </View>
  );
}
