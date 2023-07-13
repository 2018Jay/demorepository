


import React, { useEffect, useState } from 'react'

export default function TradingviewChart(props) {
  const [scriptLoaded,setscriptLoaded]=useState(false)
  const [stockSymbolstate,setstockSymbolstate]=useState(props.stockSymbol)
  const [appened,setappended]=useState(false)
  useEffect(()=>{
    let sl=false
    if (!scriptLoaded) {
      alert(stockSymbolstate)
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js';
            script.async = true;
            script.innerHTML = JSON.stringify({
              interval: '1m',
              width: '1000',
              isTransparent: false,
              height: '500',
              // symbol: 'NSE:HDFCLIFE',
              symbol: `NSE:${props.stockSymbol}`,
              showIntervalTabs: true,
              locale: 'en',
              colorTheme: 'dark'
            });
      
            script.onload = () => {
              // this.setState({ scriptLoaded: true });
              setscriptLoaded(true)
              sl=true;
            };
      
            // document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
            document.getElementsByClassName('tradingview-widget-container__widget')[0].innerHTML='';
            document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
            
          }
          
          
          setstockSymbolstate(props.stockSymbol)
          setscriptLoaded(false)
  },[props.stockSymbol,stockSymbolstate])

  return (
    <>
    <div>
      Stock Symbol :{stockSymbolstate}
    </div>
    <div className="tradingview-widget-container" style={{height:'100%' ,width:'100%'}}>
        <div className="tradingview-widget-container__widget" style={{height:'100%' ,width:'100%'}}></div>
        
      </div>
      
    </>
  )
}



