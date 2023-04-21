

const button=document.querySelectorAll("button");
const result=document.getElementById("result");

button.forEach(e =>{
    e.addEventListener("click",()=>{
        let num1=Number(document.getElementById("number-one").value);
        let num2=Number(document.getElementById("number-two").value);     
        switch (e.innerText){
            case "+":
                result.innerText=`Result: ${num1+num2}}`
            case "-":
                result.innerText= `Result: ${num1 -num2}`
                break;
            case "X":
                result.innerText=`Result: ${num1*num2}`
                break;
            default :result.innerText=`Result: ${parseFloat(num1/num2)}`  
                break;
        }
    })})
