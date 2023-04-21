
( function (){
    async function newFetch(){
        const res=await fetch("http://apiforlearning.zendvn.com/api/categories_news").catch(err=>console.log(err));
        return await res.json();
    }
    async function loadCategory(){
        const html=await newFetch();
        document.getElementById('navbarCollapse').innerHTML = html.map(({slug,link,...obj}) =>  
        `<a href="${link}" class="nav-item nav-link active">${slug}</a>`)
    }
    loadCategory()
}
)();



//do gia coin
// function loadTable() {
//     let title=document.querySelector("#folTitle h4");
//     title.innerText="COIN VALUE";
//     // const table=document.getElementById("follow");
//     // table.innerHTML= 
//     // `  
//     // <table id="coin-table" class="table table-striped table-dark">
//     //     <thead>
//     //         <tr>
//     //             <th>id</th>
//     //             <th>name</th>
//     //             <th>price</th>
//     //             <th>percent_change_24h</th>
//     //             <th>percent_change_1h</th>
//     //         </tr>
//     //     </thead>
//     //     <tbody id="cTableBody">
//     //     </tbody>
//     // </table>
//     // `;

// }
// ( function (){

//     async function newFetch(){
//         const res=await fetch("http://apiforlearning.zendvn.com/api/get-coin").catch(err=>console.log(err));
//         return await res.json();
//     }

//     async function loadTableBody() {
//         const xhtml=await newFetch();
//         await loadTable();
//         const table=document.getElementById("follow");
//         const html=xhtml.map((coin)=>` <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style="background: #39569E;">
//         <i class=" text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
//         <span class="font-weight-medium">${coin.name}: </span><span class="font-weight-medium">${coin.price}</span>
//     </a>`);
//         table.innerHTML=html;
//         //let html="";
//         // xhtml.forEach((item)=>{
//         //     html+=` <tr >
//         //     <td>${item.id}</td>
//         //     <td>${item.name}</td>
//         //     <td>${item.price}</td>
//         //     <td>${item.percent_change_1h}</td>
//         //     <td>${item.percent_change_24h}</td>
//         //  </tr>`
//         // });
//        // document.getElementById("cTableBody").innerHTML=html;  
//     }
//     loadTableBody()
// }
// )();




//thay doi anh
( function (){
    async function newFetch(){
        const res=await fetch("https://jsonplaceholder.typicode.com/albums").catch(err=>console.log(err));
        return await res.json();
    }
    async function newFetchP(){
        const resP=await fetch("https://jsonplaceholder.typicode.com/photos").catch(err=>console.log(err));
        return await resP.json();
    }
    async function loadPhotos(){
        const albumsList=await newFetch();
        const photoList=await newFetchP();
        let i=0;
        let xhtml="";
        xhtml+=albumsList.map((alb)=>
            `<div class="col-md-1 px-0">
                    <div class="position-relative overflow-hidden" style="height: 250px;">
                        <img class="img-fluid w-100 h-100" src="${photoList[i++].url}" style="object-fit: cover;">
                        <div class="overlay">
                            <div class="mb-2">
                                <a class="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                                    href="">Business</a>
                                <a class="text-white" href=""><small>Jan 01, 2045</small></a>
                            </div>
                            <a class="h6 m-0 text-white text-uppercase font-weight-semi-bold" href="">${alb.title}</a>
                        </div>
                    </div>
            </div>`
         );
         document.querySelector("#pctrChange").innerHTML=xhtml;
    }
    loadPhotos()
}
)();


function load() {
    let title=document.querySelector("#folTitle h4");
    title.innerText="GOLD VALUE";
}
( function (){

    async function newFetch(){
        const res=await fetch("http://apiforlearning.zendvn.com/api/get-gold").catch(err=>console.log(err));
        return await res.json();
    }

    async function loadGoldBody() {
        const xhtml=await newFetch();
        await load();
        const html=xhtml.map((gold)=>` <a href="" class="d-block w-100 text-white text-decoration-none mb-3" style="background: #39569E;">
        <i class=" text-center py-4 mr-3" style="width: 65px; background: rgba(0, 0, 0, .2);"></i>
        <p class="font-weight-medium" style="background: rgba(204, 183, 84, 0.8);">${gold.type}</p>
        <span class="font-weight-medium" style="background: rgba(204, 183, 84, 0.8);">BUY: ${gold.buy}</span>
        <br>
        <span class="font-weight-medium" style=" background: rgba(204, 183, 84, 0.8);" >SELL: ${gold.sell}</span>

    </a>`);
    document.getElementById("follow").innerHTML=html;
    }
    loadGoldBody()
}
)
();


//đổ  giá vàng nên học
(function () {

  const api = {
    apiUrl: `http://apiforlearning.zendvn.com/api`,
    addArrayMethods() {
      Array.prototype.sortObjectProperties = function (currentValue) {
        const entriesSortObjectProperties = Object.entries(currentValue).sort(([keyOfA, valueOfA], [keyOfB, valueOfB]) => {
          return Number(valueOfA) && Number(valueOfB) ? keyOfA.localeCompare(keyOfB) : keyOfB.localeCompare(keyOfA);
        });

        const entries = new Map(entriesSortObjectProperties);

        return Object.fromEntries(entries);
      };

      Array.prototype.sortArrByObjectSorted = function () {
        return this.reduce((acc, currentValue) => {
          const currentValueSorted = this.sortObjectProperties(currentValue);

          acc.push(currentValueSorted);

          return acc;
        }, []);
      };
    },
    getGold() {
      return new Promise((resolve, reject) => {
        fetch(`${this.apiUrl}/get-gold`)
          .then(response => response.json())
          .then(response => resolve(response))
          .catch(err => reject(err));
      });
    },
    listRender(arr) {
      const goldPrice = document.querySelector('.gold-price');
      const table = document.createElement('table');

      table.classList.add('table ');
      const thead = document.createElement('thead');
      thead.innerHTML = `<tr>
                        <th scope="col">LOẠI</th>
                        <th scope="col">MUA</th>
                        <th scope="col">BÁN</th>
                      </tr>`;

      const tbody = document.createElement('tbody');

      goldPrice.innerHTML = null;

      table.append(thead);
      table.append(tbody);

      arr.forEach((item) => {
        const tr = document.createElement('tr');

        const {type, buy, sell} = item;

        tr.innerHTML = `<td>${type}</td>
                      <td>${buy}</td>
                      <td>${sell}</td>`;

        tbody.append(tr);
      });

      goldPrice.append(table);
    },
    init() {
      this.addArrayMethods();

      this.getGold().then(goldData => {
        const goldSorted = goldData.sortArrByObjectSorted();

        this.listRender(goldSorted);
      });
    }
  };

  api.init();
})();