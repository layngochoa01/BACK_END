const btnAway=document.querySelectorAll("button .btn away");
const boxScoreAway=document.getElementById("box-score-away");
const currentValue=parseFloat( boxScoreAway.innerText);

btnAway.forEach((i) =>{
    i.addEventListener("click",(e)=>{   
       
        currentValue+=Number(e.target.innerText);
        boxScoreAway.innerText= currentValue;
       // boxScoreAway.innerText>10?boxScoreAway.innerText:`0${boxScoreAway.innerText}`;
    })})
