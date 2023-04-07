import React from 'react';
import { useEffect, useState } from "react";

let Card = (props)=>{
    const  nameRef = React.useRef(null);
    const  priceRef = React.useRef(null);
    const [hidden, setHidden] = useState(true);
    const [hiddenZak, setHiddenZak] = useState(false);
    const [counter, updateCounter] = useState(0);
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const theme = urlParams.get('theme')
    console.log("State is"+JSON.stringify(props.state))
  function handleIncrement() {
    updateCounter(counter + 1);
  }

  function handleDecrement() {
    updateCounter(counter <= 0 ? 0 : counter - 1);
  }

    let goPlus=()=>{
        
        handleIncrement()
        props.plus(nameRef.current.outerText);
        console.log(counter)
    }
    let goMinus=()=>{
        handleDecrement()
        props.minus(nameRef.current.outerText);
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
        console.log(props.orders);
        setHidden(s => !s)
        setHiddenZak(q => !q)
        

    }
    let photo = true
    if(props.state.image == null){
        photo = false
    }
    return(
        <div className="card" >
            { photo == true ?
        <div className="img-prod" onClick={()=>{props.setModalImage(props.state.image);props.setShowModalImage(true)}}>
            <img src={props.state.image} alt="" />
            
        </div>
:null}
        <div className="title">
            <h3 ref={nameRef}>{props.state.name}</h3>
        </div>
        <div className="desc">
            <p>{props.state.descr}</p>
        </div>
        <div className="price">
            <p ref={priceRef}>{ Number.parseFloat(props.state.price).toFixed(2)} Euro</p>
        </div>
        
       {photo?!hiddenZak ? <div className={theme=="blue"?"subm-button-blue":"subm-button"} onClick={goZakaz}>Pedir</div>:null:!hiddenZak ? <div className={theme=="blue"?"subm-button-blue-centr":"subm-button-centr"} onClick={goZakaz}>Pedir</div>:null}
        <br />
       {!hidden ?<div className="counter">
       <div className={theme=="blue"?"minus-button-blue":"minus-button"} onClick={goMinus}>-</div>
        <div className='count'>{counter}</div>
        <div className={theme=="blue"?"plus-button-blue":"plus-button"} onClick={goPlus}>+</div>
        
        </div>: null}

        
    </div>
    );
}
export default Card;