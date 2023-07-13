import React, { useEffect, useState } from 'react';
// import StockChart from './StockChart';
// import Demo from './Demo';
import Chart from './Chart';
import TradingViewWidget from './TradingviewChart';
import Gainers_Lossers_feture from './Gainers_Lossers_feture';
import Symbolinfo from './Symbolinfo';
import Fundametaldata from './Fundametaldata';
import Company_profile from './Company_profile';


const StockList = () => {
  const [data, setData] = useState([]);
  const [selectedCompany, setSelectedCompany] = useState('');
  const [selectedCompanySymbol,setselectedCompanySymbol]=useState('')

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/');
        if (!response.ok) {
          throw new Error('Request failed');
        }
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error(error);
      }
    };
    

    fetchData();
  }, []);

  const handleCompanyChange = (event) => {
    // setSelectedCompany(event.target.value);
    const selectedCompanyName = event.target.value;
  const selectedCompany = data.find(item => item['NAME OF COMPANY'] === selectedCompanyName);
  setSelectedCompany(selectedCompanyName);
  setselectedCompanySymbol(selectedCompany['SYMBOL']);
  };

  return (
    <div>
      <h1>Stock Screener</h1>
      <select value={selectedCompany} onChange={handleCompanyChange}>
        <option value="">Select a Company</option>
        {data.map((item, index) => (
          
          <option key={index} value={item['NAME OF COMPANY']}>
            {item['NAME OF COMPANY']}
            <div style={{display:'none'}}>({ item['SYMBOL']})</div>
          </option>
        ))}
      </select>
      {selectedCompany && (
        <div>
          <h2>Selected Company: {selectedCompany}</h2>
          <h2>Selected Company symbol: {selectedCompanySymbol}</h2>
          {/* Display additional information or perform actions based on the selected company */}
          
        </div>
        
      )}
      
      {selectedCompanySymbol && (<div>
     <div>
     <Symbolinfo stockSymbol={selectedCompanySymbol}></Symbolinfo>

      <Chart stockSymbol={selectedCompanySymbol} stockname={selectedCompany}></Chart>
      </div> 
       <TradingViewWidget stockSymbol={selectedCompanySymbol}></TradingViewWidget>
       <Fundametaldata stockSymbol={selectedCompanySymbol}></Fundametaldata>
      <Company_profile stockSymbol={selectedCompanySymbol}></Company_profile>

     </div>
      )}
    </div>
  );
};

export default StockList;
