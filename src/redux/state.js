import { renderTree } from "../render";
let state={ 
    card_state :[{
        id:1,
        image: 'https://www.maggi.ru/data/images/recept/img640x500/recept_6538_hkut.jpg',
        name:'Lyulia kebap',
        desc:'delicious kebab',
        price:7.5
    },
    {
        id:2,
        image: 'https://www.ikea.com/gb/en/images/products/dyrgrip-red-wine-glass-clear-glass__0738529_pe741474_s5.jpg',
        name:'Red wine',
        desc:'delicious wine',
        price:3.5
    }
    ],
    orders :[0]
}

export let newOrder =(order, price)=>{
 state.orders.push(order);
 state.orders[0] = state.orders[0]+parseFloat(price);
 renderTree(state)
// debugger;
}
export default state;