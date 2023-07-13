import React, { useEffect,useState } from 'react'

export default function Gainers_Lossers_feture() {
    // const [stockSymbolstate,setstockSymbolstate]=useState(props.stockSymbol)
    
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
        script.async = true;
        script.innerHTML = JSON.stringify({
          colorTheme: 'dark',
          dateRange: '12M',
          exchange: 'BSE',
          showChart: true,
          locale: 'en',
          largeChartUrl: '',
          isTransparent: false,
          showSymbolLogo: false,
          showFloatingTooltip: false,
          width: '400',
          height: '600',
          plotLineColorGrowing: 'rgba(0, 255, 0, 1)',
          plotLineColorFalling: 'rgba(255, 0, 0, 1)',
          gridLineColor: 'rgba(42, 46, 57, 0)',
          scaleFontColor: 'rgba(134, 137, 147, 1)',
          belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
          belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
          belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
          belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
          symbolActiveColor: 'rgba(41, 98, 255, 0.12)',
        });
        // document.querySelector('.tradingview-widget-container__widget').innerHTML=''
        document.getElementsByClassName('tradingview-widget-container__widget__for_top_gainers_lossers')[0].appendChild(script);
        
        return () => {
            // document.querySelector('.tradingview-widget-container__widget').innerHTML=''
          document.querySelector('tradingview-widget-container__widget__for_top_gainers_lossers').removeChild(script);
        };
        
      }, []);


  return (
    <>

<div className="tradingview-widget-container_or_top_gainers_lossers">
      <div className="tradingview-widget-container__widget__for_top_gainers_lossers"></div>
      
    </div>
      
    </>
  )
}
