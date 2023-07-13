import React, { useEffect,useState } from 'react'

export default function Economic_Calender() {
    // const [stockSymbolstate,setstockSymbolstate]=useState(props.stockSymbol)
    
    useEffect(() => {
        const script = document.createElement('script');
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-events.js';
    script.async = true;
    script.innerHTML = JSON.stringify({
      "colorTheme": "dark",
      "isTransparent": false,
      "width": "510",
      "height": "600",
      "locale": "en",
      "importanceFilter": "-1,0,1",
      "currencyFilter": "USD,CAD,INR,RUR,GBP"
    });
        // document.querySelector('.tradingview-widget-container__widget').innerHTML=''
        document.getElementsByClassName('tradingview-widget-container__widget__Economic_Calender')[0].appendChild(script);
        
        return () => {
            // document.querySelector('.tradingview-widget-container__widget').innerHTML=''
          document.querySelector('tradingview-widget-container__widget__Economic_Calender').removeChild(script);
        };
        
      }, []);


  return (
    <>

<div className="tradingview-widget-container_Economic_Calender">
      <div className="tradingview-widget-container__widget__Economic_Calender"></div>
      
    </div>
      
    </>
  )
}
