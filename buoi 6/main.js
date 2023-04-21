const inform=[
  {
    "buy": "66.450",
    "sell": "67.050",
    "type": "Vàng SJC 1L - 10L"
  },
  {
    "buy": "54.950",
    "sell": "55.900",
    "type": "Vàng nhẫn SJC 99,99 1 chỉ, 2 chỉ, 5 chỉ"
  },
  {
    "buy": "54.950",
    "sell": "56.000",
    "type": "Vàng nhẫn SJC 99,99 0,5 chỉ"
  },
  {
    "buy": "54.800",
    "sell": "55.500",
    "type": "Vàng nữ trang 99,99%"
  },
  {
    "buy": "53.650",
    "sell": "54.950",
    "type": "Vàng nữ trang 99%"
  },
  {
    "buy": "39.779",
    "sell": "41.779",
    "type": "Vàng nữ trang 75%"
  },
  {
    "buy": "30.510",
    "sell": "32.510",
    "type": "Vàng nữ trang 58,3%"
  },
  {
    "buy": "21.296",
    "sell": "23.296",
    "type": "Vàng nữ trang 41,7%"
  }
]

//const deepArr=inform.flat(res => res);
//console.log(deepArr);
function getInformGold(arr) {
  const gold=document.getElementById("goldValue");
  let html ='';
  inform.forEach((item)=>{
    html+=`
    <tr>
    <td>${item.type}</td>
    <td>${item.buy}</td>
    <td>${item.sell}</td>
  </tr>
    `
  })
  gold.innerHTML= html;
  return gold;
}
getInformGold(inform);


// const coins = [
//   {
//     "id": 1,
//     "name": "Bitcoin",
//     "price": 28232.747237221054,
//     "percent_change_24h": -0.23401747,
//     "percent_change_1h": 0.16457418
//   },
//   {
//     "id": 1027,
//     "name": "Ethereum",
//     "price": 1807.2933560774384,
//     "percent_change_24h": -0.45224732,
//     "percent_change_1h": 0.08319152
//   },
//   {
//     "id": 825,
//     "name": "Tether",
//     "price": 1.0001725747067136,
//     "percent_change_24h": 0.01459751,
//     "percent_change_1h": 0.00740955
//   },
//   {
//     "id": 1839,
//     "name": "BNB",
//     "price": 311.8991750079261,
//     "percent_change_24h": -0.75074537,
//     "percent_change_1h": -0.14582563
//   },
//   {
//     "id": 3408,
//     "name": "USD Coin",
//     "price": 0.9997752273100083,
//     "percent_change_24h": 0.02914833,
//     "percent_change_1h": 0.01161586
//   },
//   {
//     "id": 52,
//     "name": "XRP",
//     "price": 0.5127042029877314,
//     "percent_change_24h": -2.07699299,
//     "percent_change_1h": -0.01127495
//   },
//   {
//     "id": 2010,
//     "name": "Cardano",
//     "price": 0.3926611419354596,
//     "percent_change_24h": 2.2551565,
//     "percent_change_1h": -0.56296763
//   },
//   {
//     "id": 74,
//     "name": "Dogecoin",
//     "price": 0.07807436054253512,
//     "percent_change_24h": -2.60036217,
//     "percent_change_1h": 0.30419196
//   },
//   {
//     "id": 3890,
//     "name": "Polygon",
//     "price": 1.1071020822238242,
//     "percent_change_24h": -0.16019269,
//     "percent_change_1h": 0.15062673
//   },
//   {
//     "id": 5426,
//     "name": "Solana",
//     "price": 20.449812501463754,
//     "percent_change_24h": -1.72110259,
//     "percent_change_1h": 0.37922424
//   }
// ]
// function getCoin() {
//   const coin=document.getElementById("container");
//   coin.innerHTML=`
//     <tr>
//       <th>ID</th>
//       <th>name</th>
//       <th>price</th>
//       <th>percent_change_24h</th>
//       <th>percent_change_1h</th>
//     </tr>
//     `
// }
// function getInformCoin(arr) {
//   const coin=document.getElementById("coinValue");
//   let html2 ='';
//   arr.forEach((item)=>{
//     html2 +=`
//     <tr>
//       <td>${item.id}</td>
//       <td>${item.name}</td>
//       <td>${item.price}</td>
//       <td>${item.percent_change_24h}</td>
//       <td>${item.percent_change_1h}</td>
//     </tr>
//     `
//   })
//   coin.innerHTML= html2;
//   return coin;
// }
// getCoin();
// getInformCoin(coins);

// let divElement = document.querySelectorAll('div');
// console.log(divElement);
// divElement.forEach((i)=>{
//   Object.assign(i.style,{
//     width:'500px',
//     fontSize:'20px',
//     backgroundColor: 'blue'
//   })
// })
// // let divElement = document.querySelector('div');
// // Object.assign(divElement.style,{
// //       width:'500px',
// //     fontSize:'20px',
// //     backgroundColor: 'blue'
// //   })
// const h1=document.querySelector('h1');
// h1.classList.add('title');
// const p=document.querySelector('p');
// console.log([p.classList]);
// p.classList.replace('sub-title','content');console.log(p);

// // const button=document.querySelector('button');
// // setTimeout(()=>{
// //   button.style.backgroundColor = '#fff';
// // },5000);
// const button = document.querySelector('button');
//   setInterval(() => {button.classList.toggle('white')}, 5000);

  const divElement1= document.querySelectorAll('div');
  divElement1.forEach((item)=>{
    item.classList.toggle('box')
  })
  console.log(divElement1);
