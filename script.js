const sizeUpBtn = document.querySelector('.sizeUp');
const sizeDownBtn = document.querySelector('.sizeDown');
const colorBtn = document.querySelector('.color');
const p1 = document.querySelector('p');
let actualFontSize = 84;

console.log(sizeUpBtn[0]);

function enlargeText(){
    console.log('Powiększanie');
    
    if(actualFontSize <= 96)
        actualFontSize += 4;
    else
        alert('Nie szalej z taką ogromną czcionką');
    
    p1.style.fontSize = `${actualFontSize}px`;
}

function diminishText(){
    console.log('Pomniejszanie');
    
    if(actualFontSize >= 16)
        actualFontSize -= 4;
    else
        alert('Nie szalej z taką malutką czcionką');
    
    p1.style.fontSize = `${actualFontSize}px`;
}

function changeColorOfText(){
    console.log('Koloru zmienianie');
    
    //16777215 = FFFFFF
    let randColor = Math.floor(Math.random() * 16777215).toString(16);
    console.log(randColor);

    p1.style.color = `#${randColor}`;
}

sizeUpBtn.addEventListener('click', enlargeText);
sizeDownBtn.addEventListener('click', diminishText);
colorBtn.addEventListener('click', changeColorOfText);