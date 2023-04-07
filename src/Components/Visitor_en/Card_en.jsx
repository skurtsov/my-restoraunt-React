import React from 'react';
import { useEffect, useState } from "react";

let Card_en = (props)=>{
    const  nameRef = React.useRef(null);
    const  priceRef = React.useRef(null);
    const  nameLoc = React.useRef(null);
    const [hidden, setHidden] = useState(true);
    const [hiddenZak, setHiddenZak] = useState(false);
    const [counter, updateCounter] = useState(0);
    
  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

    let goPlus=()=>{
        
        handleIncrement()
        props.plus(nameRef.current.outerText);
        props.plus_loc(nameLoc.current.outerText);
        console.log(counter)
    }
    let goMinus=()=>{
        handleDecrement()
        props.minus(nameRef.current.outerText);
        props.minus_loc(nameLoc.current.outerText);
        console.log(props.orders)
        if(counter-1 == 0){
        setHiddenZak(q => !q)
        setHidden(s => !s)
        }
    }
    let goZakaz=()=>{
        handleIncrement()

        let price = priceRef.current.innerHTML;
        console.log(price)
        props.newOrder(nameRef.current.outerText, price);
        props.newOrderLoc(nameLoc.current.outerText, price)
        console.log(props.orders);
        setHidden(s => !s)
        setHiddenZak(q => !q)
        

    }
    return(
        <div className="card" >
        <div className="img-prod">
            <img src={props.state.image} alt="" />
        </div>
        <div className="title">
        <h3 className='hidden' ref={nameRef}>{props.state.name}</h3>
            <h3 ref={nameLoc}>{props.state.name_en}</h3>
        </div>
        <div className="desc">
            <p>{props.state.desc_en}</p>
        </div>
        <div className="price">
            <p ref={priceRef}>{props.state.price} Euro</p>
        </div>
        
       {!hiddenZak ? <div className="subm-button" onClick={goZakaz}>Order</div>:null}
        <br />
       {!hidden ?<div className="counter">
       <div className="minus-button" onClick={goMinus}>-</div>
        
        <div className='count'>{counter}</div>
        <div className="plus-button" onClick={goPlus}>+</div>
        </div>: null}

        
    </div>
    );
}
export default Card_en;