
//colors
let defaultSizeGrid = 255;
const container = document.getElementById('container');
const rowOfDivs = document.createElement('div');
const colors = document.querySelectorAll('.color');
const gridSize = document.getElementById('grid-count');
const gridSizeBtn =document.getElementById('grid-btn');

gridSizeBtn.addEventListener('click', (e)=>{
    defaultSizeGrid = e.target.value;
    createCanvass(defaultSizeGrid);
})
console.log(defaultSizeGrid)
//console.log(colors)
//const getDiv = document.getElementById()


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
                    rowOfDivs.style.backgroundColor = currentColor;
                })
            })
        }
    }
}
createCanvass(defaultSizeGrid);


