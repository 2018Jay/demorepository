import React, { useEffect,useState } from 'react'

export default function Company_profile(props) {
    const [scriptLoaded,setscriptLoaded]=useState(false)
    const [stockSymbolstate,setstockSymbolstate]=useState(props.stockSymbol)


    useEffect(() => {

        if (!scriptLoaded) {
            alert(stockSymbolstate)
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-symbol-profile.js';
            script.innerHTML = JSON.stringify({
            "width": 480,
            "height": 650,
            "colorTheme": "dark",
            "isTransparent": false,
            "symbol": ` NSE:${props.stockSymbol}`,
            "locale": "en"
            });
            
                  script.onload = () => {
                    // this.setState({ scriptLoaded: true });
                    setscriptLoaded(true)
                    
                  };
            
                  // document.getElementsByClassName('tradingview-widget-container__widget')[0].appendChild(script);
                  document.getElementsByClassName('tradingview-widget-container__widget_Company_profile')[0].innerHTML='';
                  document.getElementsByClassName('tradingview-widget-container__widget_Company_profile')[0].appendChild(script);
                  
                }
                
                
                setstockSymbolstate(props.stockSymbol)
                setscriptLoaded(false)

        
      }, [props.stockSymbol,stockSymbolstate]);
    
    


  return (
    <>

    <div className="tradingview-widget-container_Company_profile">
      <div className="tradingview-widget-container__widget_Company_profile"></div>
      
    </div>
    </>
  )
}
