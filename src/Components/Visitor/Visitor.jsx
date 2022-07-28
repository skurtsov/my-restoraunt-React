import React from "react";
import '../../App.css';
import Card from "./Card";


let Visitor = () => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const id = urlParams.get('id')
    let card_state=[{
        id:1,
        image: 'https://www.maggi.ru/data/images/recept/img640x500/recept_6538_hkut.jpg',
        name:'Lyulia kebap',
        desc:'delicious kebab',
        price:'7.5 Euro'
    },{
        id:2,
        image: 'https://www.ikea.com/gb/en/images/products/dyrgrip-red-wine-glass-clear-glass__0738529_pe741474_s5.jpg',
        name:'Red wine',
        desc:'delicious wine',
        price:'3.5 Euro'
    }];
    let cards = card_state.map((el)=>{
        return <Card state={el}/>;
    })
return(
    <div>
      {cards}
    </div>
);
}
export default Visitor;