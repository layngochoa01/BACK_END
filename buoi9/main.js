const a=document.querySelectorAll("a");
const URL="https://nestech.vn/";

a.forEach(i=>{
    let link=i.href;
    i.addEventListener("click",function(e){
        if(link !== URL) e.preventDefault();
    })
})
//dung url la toi uu nhat 

const button=document.querySelector("button");
button.addEventListener("click",(e)=>{ e.stopPropagation();})
