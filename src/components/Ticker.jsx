import React from 'react';

const Ticker = ({phrase, number}) => {
  const pair = (number%2);
  return(
    <div className="ticker-tape-collection">
      {pair === 0 ?
        <div className="ticker-tape-story"><span>{phrase}</span></div> :
        <div className="ticker-tape-story2"><span>{phrase}</span></div>
      }
    </div>
  )
}
export default Ticker;