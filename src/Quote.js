import React, { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import Layout from "./Layout";
import QuoteDisplay from "./component/QuoteDisplay";
import { fetchQuote } from "./services/QuoteService";
// fix this file Allie
function Quote({ quoteNum }) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
    getQuote();
  }, [quoteNum]);

  async function getQuote() {
    try {
      const quoteText = await fetchQuote(quoteNum);
      setQuote(quoteText);
    } catch {
      setQuote('Quote got Gege\'d');
    }
  }

  return (
    <QuoteDisplay quoteNum={quoteNum} quote={quote} />
  );
}

function QuoteAgent() {
  const [showQuote, setShowQuote] = useState(false);
  const [quoteNum, setWhichQuote] = useState(1);

  //state for showing the fetchQuote 
  const handleButtonClick = (show) => {
    setShowQuote(show);
  };

  const handleRandomizeQuote = () => {
    const randomTodo = Math.floor(Math.random() * 200) + 1;
    setWhichQuote(randomTodo);
  };
  //just gonna use 0 to hit another API just for this app
  const handleShowStone = () => {
    setWhichQuote(0);
  }

  return (
    // header , get quote button, hide button, quote that shows, random button
    <Layout>
    <Button mt="2" colorScheme="blue" as="a" href="/">Home</Button><br/>
      <Box p="5" borderWidth="1px" borderRadius="md" boxShadow="md">
        <button onClick={() => handleButtonClick(true)}>Show Quote</button>
        <br />
        <button onClick={() => handleButtonClick(false)}>Hide Quote</button>
        <br />
        {showQuote && <Quote quoteNum={quoteNum} />}
        <button onClick={handleRandomizeQuote}>Randomize Quote</button>
        <button onClick={handleShowStone}>Stone</button>
        <br />
      </Box>

    </Layout>
  );
}

export default QuoteAgent;
