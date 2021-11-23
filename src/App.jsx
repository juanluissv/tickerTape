import phrases from './data.js'
import './App.css';
import Ticker from './components/Ticker.jsx';

function App() {
  return (
    <section>
      <div className="ticker-tape">
        <div className="ticker-tape-scroll">
          {phrases.map((phrase, index) => (
            <Ticker key={index} phrases={phrase} number={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default App;