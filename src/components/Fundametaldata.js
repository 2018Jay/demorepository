import React, { useEffect,useState } from 'react'

export default function Fundametaldata(props) {
    const [scriptLoaded,setscriptLoaded]=useState(false)
    const [stockSymbolstate,setstockSymbolstate]=useState(props.stockSymbol)


    useEffect(() => {

        if (!scriptLoaded) {
            alert(stockSymbolstate)
            const script = document.createElement('script');
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-financials.js';
            script.async = true;
            script.innerHTML = JSON.stringify({
              "colorTheme": "light",
              "isTransparent": false,
              "largeChartUrl": "",
              "displayMode": "regular",
              "width": 480,
              "height": 830,
              "symbol": ` NSE:${props.stockSymbol}`,
              "locale": "en"
            });
            
                  script.onload = () => {
                    // this.setState({ scriptLoaded: true });
                    setscriptLoaded(true)
                    
                  };
            
                  // document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
                  document.getElementsByClassName('tradingview-widget-container__widget_Fundametaldata')[0].innerHTML='';
                  document.getElementsByClassName('tradingview-widget-container__widget_Fundametaldata')[0].appendChild(script);
                  
                }
                
                
                setstockSymbolstate(props.stockSymbol)
                setscriptLoaded(false)


        // const script = document.createElement('script');
        // script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-info.js';
        // script.async = true;
        // script.innerHTML = JSON.stringify({
        //   "symbol":` NSE:${props.stockSymbol}`,
        //   "width": 1000,
        //   "locale": "en",
        //   "colorTheme": "dark",
        //   "isTransparent": false
        // });
    
        // const container = document.getElementsByClassName('tradingview-widget-container__widget_Symbolinfo')[0];
        // container.appendChild(script);
        // setstockSymbolstate(props.stockSymbol)
        
      }, [props.stockSymbol,stockSymbolstate]);
    
    


  return (
    <>

    <div className="tradingview-widget-container_Fundametaldata">
      <div className="tradingview-widget-container__widget_Fundametaldata"></div>
      
    </div>
    </>
  )
}
