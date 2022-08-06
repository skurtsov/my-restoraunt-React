import { renderTree } from "../render";
let state_old={ 
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
    ordersServer:[]
}
let resp='';
let xhr = new XMLHttpRequest();

 xhr.open("GET","http://localhost/restoran/data.php",false);
 xhr.onreadystatechange = function() {
   if (xhr.readyState==4 && xhr.status==200)
     console.log(xhr.responseText);
     resp = xhr.responseText;
 };
 xhr.send(null);
let state = JSON.parse(resp)

//Waiter
export let addOrder=(order)=>{
    state.ordersServer = [];
       let order_valid = order.substring(0, order.length - 1);
       let order_obj = order_valid.split(';')

      
      Object.keys(order_obj).forEach(function(key) {
        state.ordersServer.push(JSON.parse(order_obj[key]))
      })
        renderTree(state);
}

export let plusOrder = (order_name) =>{

state.orders.filter(function(val) {
    return val.order == order_name;
  })[0].kol +=1 ;
  console.log(state.orders);
  renderTree(state)

}
export let minusOrder = (order_name) =>{
    state.orders.filter(function(val) {
        return val.order == order_name;
      })[0].kol -=1 ;
      if(state.orders.filter(function(val) {
        return val.order == order_name;
      })[0].kol ==0){
      const index = state.orders.findIndex((el) => el.order === order_name);
      console.log('index is:' +index)
      state.orders.splice(index,1)
      }
      console.log(state.orders);
      renderTree(state)
     
     };
    
export let newOrder =(order, price)=>{
    let ord_o = {
        order: order,
        price: price,
        kol:1,
    }
 state.orders.push(ord_o);

 //state.orders[0] = state.orders[0]+parseFloat(price);
 console.log("state resp :"+ state.orders)
 renderTree(state)
// debugger;
}
export default state;