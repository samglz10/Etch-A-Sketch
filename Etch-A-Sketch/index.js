console.log('hello world');
const container = document.getElementById('container');
const rowOfDivs = document.createElement('div');
//const getDiv = document.getElementById()

rowOfDivs.addEventListener('click', (e)=>{
    console.log(e.target.value);
})
for(let row = 0; row < 255; row++){
    const rowOfDivs = document.createElement('div');
    rowOfDivs.className = 'row';
    rowOfDivs.id = row;
    container.append(rowOfDivs);
}




/*
for(let column = 0; column < 16; column++){
    const rowOfDivs = document.createElement('div');
    rowOfDivs.className = 'column';
    rowOfDivs.innerText = column;
    container.append(rowOfDivs);
}*/

