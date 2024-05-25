
//colors
let defaultSizeGrid = 10;
const container = document.getElementById('container');
const rowOfDivs = document.createElement('div');
const colors = document.getElementsByClassName('color');
const gridSize = document.getElementById('grid-count');
const gridSizeBtn =document.getElementById('grid-btn');
const rainbow = document.getElementById('rainbow');
const getRows = document.getElementsByClassName('row');
const columnOfDivs = document.getElementById('div');

const createCanvass =(gridSize)=>{
    console.log(`createCanvass initiated...gridsize=${gridSize}`)
    for(let row = 0; row < gridSize; row++){
        const rowOfDivs = document.createElement('div');
        rowOfDivs.className = 'row';
        rowOfDivs.id = `row-${row}`;
        container.append(rowOfDivs);
        for(let column = 0; column < gridSize; column++){
            const columnOfDivs = document.createElement('div');
            columnOfDivs.className = 'column';
            columnOfDivs.id = `row-${row}-column-${column}`;
            rowOfDivs.append(columnOfDivs);
        }

    }

}


rainbow.addEventListener('click',(e)=>{
    console.log(`rainbowColors initiated...${e.target.value}`)

    const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
        let rainbowColor = `rgb(${red}, ${green}, ${blue})`;
        console.log(rainbowColor)
        //rainbow.value = rainbowColor;
        return rainbowColor;
        

})


gridSizeBtn.addEventListener('click', ()=>{
    let newGrid = gridSize.value;
    Number(newGrid);
   if(newGrid > 250 || newGrid < 4){
     return alert('enter a number between 10 and 99');
   } else {
     container.innerHTML='';
     return createCanvass(newGrid);
   }
 })

const getColor=()=>{
    for(let i = 0; i < colors.length; i++){
        //console.log(colors[i].value);
        let btn = colors[i];
        console.log(btn)
        btn.addEventListener('click',()=>{
            console.log(`${btn.value}`)
            let currentColor = btn.value;
            return currentColor;

        })
    } 
}
/*
columnOfDivs.addEventListener('click',()=>{
    console.log('hovered');
})
*/


/*

const rainbowColors=()=>{
    for(let i = 0; i < colors.length; i++){
        let selectedColor = colors[i];
        selectedColor.addEventListener('click',(e)=>{
            let currentColor = e.target.value
            columnOfDivs.addEventListener('mouseover', (e)=>{
                columnOfDivs.style.backgroundColor = currentColor;
                if(e.shiftKey){
                    columnOfDivs.style.backgroundColor = currentColor;
                }
            
            })
        })
    }
} 
*/
getColor()
createCanvass(defaultSizeGrid);



