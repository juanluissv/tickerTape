import React from 'react';

const Ticker = ({phrases, number}) => {
  const pair = (number%2);
  return(
    <div className="ticker-tape-collection">
      {pair === 0 ?
        <div className="ticker-tape-story"><span>{phrases}</span></div> :
        <div className="ticker-tape-story2"><span>{phrases}</span></div>
      }
    </div>
  )
}
export default Ticker;