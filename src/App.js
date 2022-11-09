import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  const [value, setQuote] = useState([])
  useEffect(() => {
    async function Info() {
      var response = await fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
      const json = await response.json();
    
    const list = [];
    const quoteItem = json.quotes[Math.floor(Math.random() *102)];
    list.push(
      <div>
        <p>{quoteItem.quote}</p>
        <p>By: {quoteItem.author}</p>
      </div>
    )
    setQuote(list);
    }
    Info();
  }, []);
  return (
    <div id="content">
      <h2>{value}</h2>
      <a href="/">
        <button>New Quote</button>
      </a>
    </div>
  )
};

export default App;