const randomClr = function(){
    const hex = "0123456789ABCDEF";
    let colour = "#";
    for(var i = 0; i<6 ;i++){
        colour += hex[Math.floor(Math.random()*16)];
    } 
    return colour;
}

let change;
const startColourChange = function(){
    if(!change){
        change = setInterval(colourChange,1000);
    }
    function colourChange(){
        document.body.style.backgroundColor = randomClr();
    }
};

const stopColourChange = function(){
    clearInterval(change);
    change = null;
};


document.querySelector('#start').addEventListener('click', startColourChange);
document.querySelector('#stop').addEventListener('click', stopColourChange);