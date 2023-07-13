import React, { useEffect,useState } from 'react'

export default function Screener() {
    // const [stockSymbolstate,setstockSymbolstate]=useState(props.stockSymbol)
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-screener.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          "width": 1100,
          "height": 523,
          "defaultColumn": "overview",
          "defaultScreen": "most_capitalized",
          "market": "india",
          "showToolbar": true,
          "colorTheme": "dark",
          "locale": "en"
        });
    
        const container = document.getElementsByClassName('tradingview-widget-container__widget_Screener')[0];
        container.appendChild(script);
    
        return () => {
          container.removeChild(script);
        };
      }, []);
    
      return (
        <div className="tradingview-widget-container_Screener">
          <div className="tradingview-widget-container__widget_Screener"></div>
          
        </div>
      );
}
