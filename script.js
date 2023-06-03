function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    console.log(txt);
    if(color == "#000000"){
        for(let elm of txt){
            elm.style.color = "#fff"
            console.log(elm)
        }
    }else{
        for(let elm of txt){
            elm.style.color = "black"
            console.log(color)
        }
    }
}
let navbar = document.getElementById("menu-bar")
window.addEventListener('scroll', ()=>{
   if(window.pageYOffset >= 300){
    navbar.classList.add('sticky')
   }else{
    navbar.classList.remove('sticky')
   }
})