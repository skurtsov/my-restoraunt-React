import { renderTree } from "../render";
let state_old={ 
    card_state :[{
        id:1,
        image: 'http://www.maggi.ru/data/images/recept/img640x500/recept_6538_hkut.jpg',
        name:'Lyulia kebap',
        desc:'delicious kebab',
        price:7.5
    },
    {
        id:2,
        image: 'http://www.ikea.com/gb/en/images/products/dyrgrip-red-wine-glass-clear-glass__0738529_pe741474_s5.jpg',
        name:'Red wine',
        desc:'delicious wine',
        price:3.5
    }
    ],
    orders :[0],
    ordersServer:[]
}
let resp='';
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let restoran = urlParams.get('restoran')
if(restoran == null){
  restoran = "gyros";
  console.log("restoran:"+restoran)
}
console.log("https://makemesites.com/restoran/data.php?restoran="+restoran);
let xhr = new XMLHttpRequest();
 xhr.open("POST","https://makemesites.com/restoran/data.php?restoran="+restoran,false);
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
        try{
        state.ordersServer.push(JSON.parse(order_obj[key]))
        }
        catch{
          state.ordersServer = []
                }
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
//Multilangual plus 
export let plusOrder_loc = (order_name) =>{

  state.orders_loc.filter(function(val) {
      return val.order == order_name;
    })[0].kol +=1 ;
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
     //multilangual minus
     export let minusOrder_loc = (order_name) =>{
      state.orders_loc.filter(function(val) {
          return val.order == order_name;
        })[0].kol -=1 ;
        if(state.orders_loc.filter(function(val) {
          return val.order == order_name;
        })[0].kol ==0){
        const index = state.orders_loc.findIndex((el) => el.order === order_name);
        state.orders_loc.splice(index,1)
        }
        renderTree(state)
       
       };
    
export let newOrder =(order, price)=>{
    let ord_o = {
        order: order,
        price: price,
        kol:1,
    }
 state.orders.push(ord_o);
 console.log("state resp :"+ state.orders)
 renderTree(state)
}
export let newOrderLoc =(order, price)=>{
  let ord_loc = {
      order: order,
      price: price,
      kol:1,
  }
state.orders_loc.push(ord_loc);
renderTree(state)
}
export default state;