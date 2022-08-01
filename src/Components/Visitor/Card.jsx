import React from 'react';

let Card = (props)=>{
    const  nameRef = React.useRef(null);
    const  priceRef = React.useRef(null);
    let goZakaz=()=>{
        let price = priceRef.current.innerHTML;
        console.log(price)
        props.newOrder(nameRef.current.outerText, price);
        console.log(props.orders)

    }
    return(
        <div className="card" >
        <div className="img-prod">
            <img src={props.state.image} alt="" />
        </div>
        <div className="title">
            <h3 ref={nameRef}>{props.state.name}</h3>
        </div>
        <div className="desc">
            <p>{props.state.desc}</p>
        </div>
        <div className="price">
            <p ref={priceRef}>{props.state.price} Euro</p>
        </div>
        <div className="subm-button" onClick={goZakaz}>Заказать</div>
        
    </div>
    );
}
export default Card;