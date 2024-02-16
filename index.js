
const seekEl = document.getElementById("seek")
const selectEl = document.getElementById("select")
const colors = document.getElementsByClassName("colors")
const colorShow = document.getElementsByClassName("color-show")
const hexText = document.getElementsByClassName("hex-text")
const colorbtnEl = document.getElementById("color-btn")


function generateRandomColor(){
    const maxValue= 0xFFFFFF
    const RandomNum = Math.floor(Math.random()*maxValue)
    const HexNumber = RandomNum.toString(16).padStart(6,'0'); 
    return `#${HexNumber.toUpperCase()}` 
}

seekEl.value = generateRandomColor()

function arrangeColor(object){

    const {colors} = object
    
    for (let i = 0; i < 5; i++) {
        
        const {hex:{value}} = colors[i]
        colorShow[i].style.backgroundColor = value
        hexText[i].textContent = value
        hexText[i].value = value
        
    }
}

    colorbtnEl.addEventListener('click', () => {
        const colorCode = seekEl.value.slice(1) 
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorCode}&mode=${selectEl.value}&count=5`)
    .then(res => res.json())
    .then( data => {
        console.log(data)
        arrangeColor(data)
        
    })
    })
    


function copyText(index){
const textCopied = hexText[index].value 
const ColumnColor = colorShow[index].value
if(textCopied){
    navigator.clipboard.writeText(textCopied)
    .then(()=>{
        alert("Copied the color: "+textCopied)

    }) 

    .catch((error)=>{
        console.error("Copy Failed:",error)
    })
}
else if(ColumnColor){
    navigator.clipboard.writeText(ColumnColor)
    .then(()=>{
        alert("Copied the color: "+ColumnColor)

    }) 
    .catch((error)=>{
        console.error("Copy Failed:",error)
    })
}

}








