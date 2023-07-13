import React, { useEffect, useState } from 'react';
import StockList from './components/StockList';
// import StockGraph from './components/StockGraph';
import Chart from './components/Chart';
import TradingViewWidget from './components/TradingviewChart';
import Gainers_Lossers_feture from './components/Gainers_Lossers_feture';
import Symbolinfo from './components/Symbolinfo';
import Screener from './components/Screener';
import Economic_Calender from './components/Economic_Calendar';

// import Demo from './components/Demo';
// import Component1 from './components/Component1';

const App = () => {
  
 

  return (
    <div style={{backgroundColor:'red'}}>
      
      <StockList></StockList>
      <Screener></Screener>
      <div style={{width:"100%"}}><Gainers_Lossers_feture ></Gainers_Lossers_feture></div>
     <Economic_Calender></Economic_Calender>
      <div>
      
        

      </div>
    </div>
  );
};

export default App;
