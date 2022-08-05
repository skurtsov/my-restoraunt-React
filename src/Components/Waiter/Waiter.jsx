import React from "react";
import { useState, useEffect } from "react";
import Order from "./Order";


let Waiter = (props) => {
   let get_orders=()=>{     
    let resp='';
    let xhr = new XMLHttpRequest();
   
     xhr.open("GET","http://localhost/restoran/waiter.php",false);
     xhr.onreadystatechange = function() {
       if (xhr.readyState==4 && xhr.status==200)
         console.log(xhr.responseText);
         resp = xhr.responseText;
     };
     xhr.send(null);
    // console.log(resp);
     props.addOrder(resp);
     console.log("server orders:"+ props.server[0].zakaz);
   // console.log("arr"+ typeof(arr))
}
useEffect(() => {
    setInterval(() => {
      get_orders()
    }, 2000);
  }, []);
//get_orders();
let ordersToShow = props.server.map((el)=>{
  return <Order stolik={el.stolik} zakaz={el.zakaz}/>
})
return(
    <div>
        <button onClick={get_orders}>Ok</button>
        <h1>I am waiter</h1>
        
        {ordersToShow}
        <h4>столик{}</h4>
        <h4>заказ{}</h4>
    </div>
);
}
export default Waiter;