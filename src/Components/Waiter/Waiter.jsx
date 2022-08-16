import e from "cors";
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
     props.addOrder(resp);
     console.log("server orders:"+ props.server[0].zakaz);
   // console.log("arr"+ typeof(arr))
}
let clean_orders=()=>{     
  if (window.confirm("Вы уверены?")) {
  let xhr = new XMLHttpRequest();
  xhr.open("GET","http://localhost/restoran/clean.php",false);
  xhr.send();
} 
else{
 return false;
}
}
useEffect(() => {
    setInterval(() => {
      get_orders();
    }, 2000);
  }, []);

//get_orders();
let ordersToShow = props.server.map((el)=>{
  return <Order stolik={el.stolik} zakaz={el.zakaz} id={el.id}/>
})
return(
    <div>
        <h1>Pedidos totales:{props.server.length}</h1>
        
        {ordersToShow}
        <div className="bottom-plash">
        <button className="open__order" onClick={()=>clean_orders()}>Limpiar todo</button>
      </div>
        
    </div>
);
}
export default Waiter;