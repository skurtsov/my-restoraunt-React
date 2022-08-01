import React from "react";
import { useState, useEffect } from "react";


let Order = (props) => {
     let ord = props.zakaz.split(',');
     let arr =[];
     
     console.log(typeof(ord))
     Object.keys(ord).forEach(function(key) {
         arr.push(ord[key])
       })
       let arr_show = arr.map((el,index)=>{
        return <li key={index}>{el}</li>
       })
       

return(
    <div>
          <div class="card">
            <div class="stolik">
                <p>Numer stolika {props.stolik} </p>
            </div>
            <div class="zam">
                <ul>
            {arr_show}
            </ul>
            </div>
            <div class="accept">
                <i class="fa-solid fa-check"></i>
                <i class="fa-solid fa-pen-to-square"></i>
            </div>

        </div>
    </div>
);
}
export default Order;