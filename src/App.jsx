import React, { useState, useEffect } from 'react'
import data from './data.js'
import './App.css';
import Ticker from './components/Ticker.jsx';

function App() {
    const [loading, SetLoading] = useState(true);
    const [phrases, SetPhrases] = useState([]);

    useEffect(() => {
      if(loading){
        SetPhrases(data)
        SetLoading(false)
      }
    },[loading])

  return (
    <section>
        {loading ? <p> LOADING ... </p>  :
            <div className="ticker-tape">
                <div className="ticker-tape-scroll">
                  {phrases.map((phrase, index) => (
                    <Ticker key={index} phrase={phrase} number={index} />
                  ))}
                </div>
            </div>
        }
    </section>
  );
}
export default App;