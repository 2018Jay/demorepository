import { ColorType, createChart } from 'lightweight-charts';
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios';
import { TOTP } from 'jsotp';
import { type } from '@testing-library/user-event/dist/type';


export default function Chart(props) {
  function getMillisecondsFor9AM30() {
    var currentDate = new Date();
    currentDate.setHours(9);
    currentDate.setMinutes(30);
    currentDate.setSeconds(0);
    currentDate.setMilliseconds(0);
    return currentDate.getTime();
  }
    
    const [data1,setdata1]=useState([]);
    let ddd=[]
    const [forrender,setrender]=useState('')
    const [milisec,setMilliseconds]=useState(getMillisecondsFor9AM30());
    const [livedata,setLiveData]=useState({ time:milisec/1000 })
    const [jwtToken,setjwToken]=useState('')
    const [stocktoken,setstocktoken]=useState({})

    










   
    const data20 = [{ open: 10, high: 10.63, low: 9.49, close: 9.55, time: 1642427876 },
         { open: 9.55, high: 10.30, low: 9.42, close: 9.94, time: 1642514276 },
          { open: 9.94, high: 10.17, low: 9.92, close: 9.78, time: 1642600676 },
           { open: 9.78, high: 10.59, low: 9.18, close: 9.51, time: 1642687076 },
            { open: 9.51, high: 10.46, low: 9.10, close: 10.17, time: 1642773476 },
             { open: 10.17, high: 10.96, low: 10.16, close: 10.47, time: 1642859876 },
              { open: 10.47, high: 11.39, low: 10.40, close: 10.81, time: 1642946276 },
               { open: 10.81, high: 11.60, low: 10.30, close: 10.75, time: 1643032676 },
                { open: 10.75, high: 11.60, low: 10.49, close: 10.93, time: 1643119076 },
                 { open: 10.93, high: 11.53, low: 10.76, close: 10.96, time: 1643205476 }];
        //  console.log(data20)

       
    const chartref = useRef();
    useEffect(() => {
      const featchtoken=async()=>{
        fetch('http://localhost:5000/stocktoken', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ StockSymbol: props.stockSymbol, key2: 'value2' }) // Replace with your JSON payload
        })
          .then(response => response.json()
          )
          .then(data => {
            // Handle the response from the Flask server
            // alert(data['token']+"==>"+data['stockname'])
            setstocktoken(data)
           
            console.log(data);
          })
          .catch(error => {
            // Handle any errors that occur during the request
            console.error('Error:', error);
          });
        
      }
         
        const fetchStock=async ()=>{
        
            const API_KEY='N1Q80FBG64O3CMHJ';     //jipatel052003@gmail.com
            // const API_KEY='09GF5J9HL3A4QNFV';     //jaypatel052003@gmail.com
            const symbol=props.stockSymbol
            // const symbol='IFBAGRO'
            let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}.BSE&outputsize=full&apikey=${API_KEY}`;
            // let API_Call=`https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}.BSE&interval=5min&outputsize=compact&apikey=${API_KEY}`;
            let functiondata1=[]
            
        
            
           await fetch(API_Call)
                .then(
                    function(response){
                       return response.json();
                    }
                ).then(
                    function(data){
                         
                        function dateToMilliseconds(dateString) {
                            const dt = new Date(dateString);
                            const milliseconds = dt.getTime();
                            return milliseconds;
                          }
    
                        console.log(data)
    
                        for(var key in data['Time Series (Daily)']){
                            
                           
                            const inputDate = key;
                            const milliseconds = dateToMilliseconds(inputDate);
                            const open=parseFloat(data['Time Series (Daily)'][key]['1. open'])
                            const high=parseFloat(data['Time Series (Daily)'][key]['2. high'])
                            const low=parseFloat(data['Time Series (Daily)'][key]['3. low'])
                            const close=parseFloat(data['Time Series (Daily)'][key]['4. close'])
    
                            const myObject = {
                                open: open,
                                 high: high,
                                  low: low,
                                   close: close,
                                    time: milliseconds/1000,
                              };
                              functiondata1.push(myObject)
                            // onedata.push(convertedmilisec)
                        }
                        console.log("fatch function 1"+functiondata1)
                        functiondata1.reverse()
                        ddd=functiondata1
                        
                        
                      
                        setdata1(functiondata1)
                       
                        
                        // setrender(props.stockSymbol)
                        console.log("this is state data"+data1)
                        console.log("demo.......")
                        featchtoken()
                    }
                )
                console.log("feating data complite.......................")
    
        }

        console.log("feaching data...............")
        fetchStock()
        // featchtoken()
        
        
        console.log("not complately featch.......")
        setrender(props.stockSymbol)
      
}, [props.stockSymbol])

    useEffect(() => {
        console.log('data1:', data1);
        const chart = createChart(chartref.current, {
            layout: {
                background: {  color: "black" },
               textColor:"white"
            },
            width: chartref.current.clientWidth,
            height: 500,

        })


        
        

       
        const newSeries = chart.addCandlestickSeries({
            upColor: '#26a69a',
            downColor: '#ef5350',
            borderVisible: false,
            wickUpColor: '#26a69a',
            wickDownColor: '#ef5350',
        })
        newSeries.setData(data1)
//######################### for get detailes of user ######################
const fetchLoginData = async () => {
  try {
            const response = await axios.post(
              'https://apiconnect.angelbroking.com/rest/auth/angelbroking/user/v1/loginByPassword',
              {
                "clientcode":"J206863",
                "password":"1808",
              "totp":new TOTP("QAAPLNDASSU57C6MLMYEOC4K2E").now()
            },
              {
                headers: {
                    // 'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJ1c2VybmFtZSI6IkoyMDY4NjMiLCJyb2xlcyI6MCwidXNlcnR5cGUiOiJVU0VSIiwiaWF0IjoxNjg3NTc4NTgxLCJleHAiOjE2ODc2NjQ5ODF9.L3VAl3RqMpK6D_7D-7qczdohMCMPHGEvmnMFwW5yyzkMbtgqCrf8UHUDg05aFdfb4RzX2qUBM8Rg3mvhHeFd3A', 
                    'Content-Type': 'application/json', 
                    'Accept': 'application/json', 
                    'X-UserType': 'USER', 
                    'X-SourceID': 'WEB', 
                    'X-ClientLocalIP': ' 192.168.221.28', 
                    'X-ClientPublicIP': '157.32.109.131', 
                    'X-MACAddress': 'fe80::fb68:f38f:6d38:afc9%20', 
                    'X-PrivateKey': 'VdVFJ5D1'
                }
               
              }
            );
    
            // setLtpData(response.data);
    
            console.log("Tata---"+response.data)
            console.log(response.data)
            let temp=response.data
            console.log("Chart-->"+temp['data']['jwtToken']);
            setjwToken(temp['data']['jwtToken'])

          } catch (error) {
            console.error(error);
          }
      };
  
fetchLoginData();



      
//  ########### for dynamic char ######################




  const con={}     
const interval=setInterval(async() => {
  setMilliseconds(getMillisecondsFor9AM30)


  const response =await  axios.post(
    'https://apiconnect.angelbroking.com/order-service/rest/secure/angelbroking/order/v1/getLtpData',
    {
      exchange: 'NSE',
      tradingsymbol: stocktoken['stockname'],
      symboltoken: stocktoken['token']
    },
    {
      headers: {
          'Authorization': `Bearer ${jwtToken}`, 
          'Content-Type': 'application/json', 
          'Accept': 'application/json', 
          'X-UserType': 'USER', 
          'X-SourceID': 'WEB', 
          'X-ClientLocalIP': ' 192.168.221.28', 
          'X-ClientPublicIP': '157.32.109.131', 
          'X-MACAddress': 'fe80::fb68:f38f:6d38:afc9%20', 
          'X-PrivateKey': 'VdVFJ5D1'
      }
    }
  );

  

  console.log("Chart---"+JSON.stringify(response.data, null, 2))
  let temp=response.data
  console.log("lllllivedata"+temp)
  console.log(temp);
  let livedata1={ open: temp['data']['open'], high: temp['data']['high'], low: temp['data']['low'], close: temp['data']['ltp'], time: getMillisecondsFor9AM30()/1000 }
   
  
  console.log("dadadadaadadaada"+livedata1);
  console.log(livedata1);
   setLiveData(livedata1=>livedata1)
   
  

  livedata['time']=milisec

   newSeries.update(livedata1)
}, 1000);
       

    
    return () => {
      clearInterval(interval)
        chart.remove()
    }
 
      }, [forrender,stocktoken]);
      

    return ( < div >
        <div ref = { chartref }
        style = {
            { 'width': "50%", 'height': "50%" }
        } > </div> 
        <div>
            {forrender+"................"}
            
        </div>
        {/* <Tata></Tata> */}
        </div >
    )
}