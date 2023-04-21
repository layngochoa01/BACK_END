const content=document.querySelector('#content');
const h1=document.querySelector('h1');
const selectRoot=document.getElementById('slb-text-align');
const lineHeight1=document.getElementById('slb-line-height');
//thay doi mau nen
// function changeWhite(){
//     content.style.backgroundColor('white');
// }
// function changeGold(){
//     content.style.backgroundColor('yellow');
// }
// function changeGreen(){
//     content.style.backgroundColor('green');
// }
// function  changeRed(){
//     content.style.backgroundColor('red');
// }
// function changeBlue(){
//     content.style.backgroundColor('blue');
// }
//c2
(function (content) {
  const BT = {
    setBackground() {
      const backgroundColorItems = document.querySelectorAll('#background-color button');

      backgroundColorItems.forEach((item) => {
        item.onclick = (evt) => {
          content.style.backgroundColor = evt.target.innerText.toLowerCase();
        };
      });
    },

    run() {
      this.setBackground();
    }
  };

  BT.run();
})(content);
//c3
const btnchange =document.getElementsByClassName('btn-background');
const contentout = document.querySelector('#content');
const btnchangearray = Array.from(btnchange);
btnchangearray.forEach((item)=>{
    item.onclick =(e)=>{
        contentout.style.color = e.target.getAttribute('data-value');
    }
})

//thay doi kich thuoc size chu
const btnDesc = document.querySelector('#btn-desc');
const btnAsc = document.querySelector('#btn-asc');
const getDefaultFontSize = () => {
  const element = document.createElement('div');
  element.style.width = '1rem';
  element.style.display = 'none';
  document.body.append(element);

  const widthMatch = window
      .getComputedStyle(element)
      .getPropertyValue('width')
      .match(/\d+/);

  element.remove();

  if (!widthMatch || widthMatch.length < 1) {
      return null;
  }

  const result = Number(widthMatch[0]);
  return !isNaN(result) ? result : null;
};

let currentFontSize = getDefaultFontSize();

btnDesc.onclick = () => {
  --currentFontSize;
  content.style.fontSize = `${currentFontSize}px`;
};

btnAsc.onclick = () => {
  ++currentFontSize;
  content.style.fontSize = `${currentFontSize}px`;
};

//canh lề
//c1
// selectRoot.onchange = function(){
//     let choose=selectRoot.value;
//     switch(choose){
//         case 'left':
//             content.style.textAlign='left'
//             break;
//         case 'right':
//             content.style.textAlign='right'
//             break;
//         case 'center':
//             content.style.textAlign='center'
//             break;
//         default : content.style.textAlign='justify'
//             break;
        
//     }
// }
    
        
    

//c2

const alignState = {
  left: 'left',
  right: 'right',
  center: 'center',
  justify: 'justify'
};


selectRoot.onchange = function (evt) {
  const align = evt.target.value;
  return content.style.textAlign = alignState[align];
};



//chieu cao dong

lineHeight1.onchange = (evt) => (content.style.lineHeight = evt.target.value+"em");
//c2
//   lineHeight1.onchange = function(){
//     let height=lineHeight1.value;
//     switch(height){
//         case '2':
//             content.style.lineHeight='2'+'em'
//             break;
//         case '1.5':
//             content.style.lineHeight='1.5'+'em'
//             break;
//         default : content.style.lineHeight='1'+'em'
//             break;
        
//     }
// }
    
  


