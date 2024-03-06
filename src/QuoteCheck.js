import React, { useState, useEffect } from "react";
import { Box, Button } from "@chakra-ui/react";
import Layout from "./Layout";
// fix this file Allie
function FetchQuote({ quoteNum }) {
  const [quote, setQuote] = useState('');

  useEffect(() => {
      // run quote when  changes
    const url = `https://jsonplaceholder.typicode.com/todos/${quoteNum}`;
    getQuote(url);
  }, [quoteNum]);

  function getQuote(url) {
    console.log('Fetching quote...');
    fetch(url)
      .then(response => response.json())
      .then(data => {
        try {
          setQuote(data.title);
        } catch {
          setQuote('Error getting quote');
        }
      });
  }

  return (
    <p>Quote {quoteNum}: {quote}</p>
  );
}

function QuoteCheck() {
  const [showQuote, setShowQuote] = useState(false);
  const [whichQuote, setWhichQuote] = useState(1);

  //state for showing the fetchQuote 
  const handleButtonClick = (show) => {
    setShowQuote(show);
  };

  const handleRandomizeQuote = () => {
    const randomTodo = Math.floor(Math.random() * 200) + 1;
    setWhichQuote(randomTodo);
  };

  return (
    // header , get quote button, hide button, quote that shows, random button
    <Layout>
    <Button mt="2" colorScheme="blue" as="a" href="/">Home</Button><br/>
      <Box p="5" borderWidth="1px" borderRadius="md" boxShadow="md">
        <button onClick={() => handleButtonClick(true)}>Show Quote</button>
        <br />
        <button onClick={() => handleButtonClick(false)}>Hide Quote</button>
        <br />
        {showQuote && <FetchQuote quoteNum={whichQuote} />}
        <button onClick={handleRandomizeQuote}>Randomize Quote</button>
        <br />
      </Box>

    </Layout>
  );
}

export default QuoteCheck;
