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
    orders :[0],
    ordersServer:[],
}
export let addOrder=(order)=>{
    state.ordersServer = [];
       // console.log("hello")
      // let order_obj =  order.split(';');
       //let r  ='{"stolik":"2","zakaz":"Red wine,Lyulia kebap"};{"stolik":"1","zakaz":"Red wine,Red wine"};{"stolik":"15","zakaz":"Lyulia kebap,Lyulia kebap,Lyulia kebap,Lyulia kebap"};'
      let order_valid = order.substring(0, order.length - 1);
       let order_obj = order_valid.split(';')
      //let extra =[];
      
      Object.keys(order_obj).forEach(function(key) {
        state.ordersServer.push(JSON.parse(order_obj[key]))
         // console.log()
      })

    //    state.ordersServer = ordern.map((el)=>{
    //       try {
    //        return JSON.parse(el);
    //   } catch (err) {
    //     console.log('error', err);
    //   }
    // })
       // state.ordersServer.push(order);
        renderTree(state);
}


export let newOrder =(order, price)=>{
 state.orders.push(order);
 state.orders[0] = state.orders[0]+parseFloat(price);
 renderTree(state)
// debugger;
}
export default state;