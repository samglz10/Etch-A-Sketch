console.log('hello world');
const container = document.getElementById('container');
const rowOfDivs = document.createElement('div');
//const getDiv = document.getElementById()


for(let row = 0; row < 255; row++){
    const rowOfDivs = document.createElement('div');
    rowOfDivs.className = 'row';
    rowOfDivs.id = row;
    container.append(rowOfDivs);

    rowOfDivs.addEventListener('click', (e)=>{
        rowOfDivs.style.backgroundColor = 'red';
        console.log(e.target.id);
    })
}



/*
for(let column = 0; column < 16; column++){
    const rowOfDivs = document.createElement('div');
    rowOfDivs.className = 'column';
    rowOfDivs.innerText = column;
    container.append(rowOfDivs);
}*/

