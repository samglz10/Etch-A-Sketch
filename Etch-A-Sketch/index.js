
//colors
let defaultSizeGrid = 255;
const container = document.getElementById('container');
const rowOfDivs = document.createElement('div');
const colors = document.querySelectorAll('.color');
const gridSize = document.getElementById('grid-count');
const gridSizeBtn =document.getElementById('grid-btn');
const rainbow = document.getElementById('rainbow');

gridSizeBtn.addEventListener('click', (e)=>{
   console.log(gridSize)
   gridSize.value = 3;
   console.log(gridSize)

})
console.log(defaultSizeGrid)
//console.log(colors)
//const getDiv = document.getElementById()

function rainbowColors(){
        rainbow.addEventListener('click',(e)=>{
            const red = Math.floor(Math.random() * 256); // Random integer between 0 and 255
            const green = Math.floor(Math.random() * 256);
            const blue = Math.floor(Math.random() * 256);
                let rainbowColor = `rgb(${red}, ${green}, ${blue})`;
                rainbow.value = rainbowColor;
                rainbow.styles.color = rainbowColor
                //console.log(rainbowColor)
                rowOfDivs.addEventListener('mouseover', (e)=>{
                    rainbowColors();
                    console.log(rainbowColor)
                    rowOfDivs.style.backgroundColor = rainbowColor;
                })
        })

}
rainbowColors()


const createCanvass =(gridSize)=>{
    for(let row = 0; row < gridSize; row++){
        const rowOfDivs = document.createElement('div');
        rowOfDivs.className = 'row';
        rowOfDivs.id = row;
        container.append(rowOfDivs);
        for(let i = 0; i < colors.length; i++){
            let selectedColor = colors[i];
            selectedColor.addEventListener('click',(e)=>{
                let currentColor = e.target.value
                rowOfDivs.addEventListener('mouseover', (e)=>{
                    if(e.shiftKey){
                        rowOfDivs.style.backgroundColor = currentColor;
                    }
                })
            })
        } 
    }
}
createCanvass(defaultSizeGrid);



