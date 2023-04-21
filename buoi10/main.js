// let json=['php','c++'];
// let obj={
//     'name':'abc',
//     'age':18
// }
// console.log(JSON.stringify('1'));
// console.log(typeof(JSON.stringify('1')));
let URL="https://jsonplaceholder.typicode.com/posts"
fetch(URL)
      .then(response => response.json())
      .then(json =>{
        let xhtml=json.map(post=>
            `<div>
                <h2>${post.title}</h2>
                <p>${post.body}</p>
            </div>`
            )
        let html=xhtml.join('');
        document.getElementById('app').innerHTML=html;
        console.log(post);
      })