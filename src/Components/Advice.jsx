import React, { useEffect, useState } from 'react';
import "../assets/Styles/Advice.css"


export const Advice = () => {
   const[advice,setadvice]= useState("Have a good Day :)");
   const[count,setcount]=useState(0);

   async function getadvice(){
    const result =await fetch("https://api.adviceslip.com/advice");
    // data is fetched in as readable stream
    const data = await result.json();
    //dat is converted into json format for usage
    setadvice((data.slip.advice));
    setcount((c)=>c+1);
   }

   //incase you needed a advice loaded prioir you enter the page means
//    useEffect(function(){
//     getadvice();
//     },[]);


  return (
    
    <>
    <div>
        <h2>{advice}</h2>
        <button onClick={getadvice}>Get Free Advice</button>
        <p>You have read <b>{count}</b> of advices today!</p>
    </div>
    </>
  )
}
