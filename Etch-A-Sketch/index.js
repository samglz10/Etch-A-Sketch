
//colors
let defaultSizeGrid = 10;
let currentColor ='red';
const container = document.getElementById('container');
const rowOfDivs = document.createElement('div');
const colors = document.getElementsByClassName('color');
const gridSize = document.getElementById('grid-count');
const gridSizeBtn = document.getElementById('grid-btn');
const rainbow = document.getElementById('rainbow');
const getRows = document.getElementsByClassName('row');
//const columnOfDivs = document.getElementById('div');

const getColor=()=>{
    for(let i = 0; i < colors.length; i++){
        let btn = colors[i];
        btn.style.backgroundColor = colors[i].value
        btn.addEventListener('click',()=>{
            let currentColor = btn.value;
            btn.style.backgroundColor = currentColor
            return color = currentColor;
        })
    } 
}


const createCanvass =(gridSize)=>{
    console.log(`createCanvass initiated...gridsize=${gridSize}`);
    for(let row = 0; row < gridSize; row++){
        const rowOfDivs = document.createElement('div');
        rowOfDivs.className = 'row';
        rowOfDivs.id = `row-${row}`;
        container.append(rowOfDivs);
        for(let column = 0; column < gridSize; column++){
            const columnOfDivs = document.createElement('div');
            columnOfDivs.className = 'column';
            let newId = `row-${row}-column-${column}`
            columnOfDivs.id = newId;
            //columnOfDivs.value = 'hi'
            rowOfDivs.append(columnOfDivs);
            columnOfDivs.addEventListener('mouseover', (e)=>{
                getColor();
                    columnOfDivs.value = color;
                    columnOfDivs.style.backgroundColor = color;
               })
        }
    }

}


rainbow.addEventListener('click',(e)=>{
   // getColor();
    console.log(`rainbowColors initiated...${e.target.value}`)
    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const random = ()=>{
        return red, green, blue
    }
    random(red, green, blue);
    
        let rainbowColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(rainbowColor);
        rainbow.value = rainbowColor;
        rainbow.style.backgroundColor = rainbowColor;
        return rainbowColor;
})


gridSizeBtn.addEventListener('click', ()=>{
    let newGrid = gridSize.value;
    Number(newGrid);
   if(newGrid > 100 || newGrid < 4){
     return alert('enter a number between 4 and 99');
   } else {
     container.innerHTML='';
     return createCanvass(newGrid);
   }
 })
getColor();
createCanvass(defaultSizeGrid);



