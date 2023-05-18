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
    console.log('prop is '+props.state.image)
    let photo = true
    if(props.state.image == ""){
        photo = false
    }
    console.log('prop is '+photo)
    return(
        <div className="card" >
            { photo == true ?
        <div className="img-prod" onClick={()=>{props.setModalImage(props.state.image);props.setShowModalImage(true)}}>
            <img src={props.state.image} alt="" />
            
        </div>
:null}
        <div className="title">
            <h3 className='skutitle' ref={nameRef}>{props.state.name}</h3>
        </div>
        <div className="desc">
            <p>{props.state.desc}</p>
        </div>
        <div className="price">
            <p ref={priceRef}>{ Number.parseFloat(props.state.price).toFixed(2)} Euro </p>
        </div>
      
       {!hiddenZak && !photo ? <div className={"subm-button "+theme + " centered"} onClick={goZakaz}>Pedir</div>:!hiddenZak && photo ? <div className={"subm-button "+theme} onClick={goZakaz}>Pedir</div>:null}
      
        <br />
       {!hidden ?<div className="counter">
       <div className={!photo?"minus-button centeredq "+theme :"minus-button "+theme} onClick={goMinus}>-</div>
        <div className={!photo?"count centeredq " :"count"}>{counter}</div>
        <div className={!photo ?"plus-button centeredq "+theme:"minus-button "+theme} onClick={goPlus}>+</div>
        </div>: null}

        
    </div>
    );
}
export default Card;