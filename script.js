const container = document.querySelector(".container")
const btn = document.querySelector('.btn')
const img = document.querySelector('.img')

const gen = "0123456789ABCDEF"

btn.addEventListener('click', ()=>{
  // console.log(img.src)
  if(img.src.includes('levi')){
    btn.textContent = 'Toggle to Levi'
    img.src = './gojo.png'
  } else{
    btn.textContent = 'Toggle to Gojo'
    img.src = './levi.png'
  }
})


const generateColor = ()=>{
    let word = ""
    for(let i =0; i < 6; i++){
        let idx = Math.floor(Math.random()*16)
        word += gen[idx]
    }
    // console.log(word)
    return word
}

var i = 0, howManyTimes = 1000;

function f() {

  if (i < howManyTimes) {
    container.style.background = 
    `linear-gradient(${Math.floor(Math.random()*360)}deg, #${generateColor()} 0%, #${generateColor()} 100%)`;
    
    setTimeout(f, 800);
  }
}

f();
