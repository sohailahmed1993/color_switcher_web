function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt = document.getElementsByClassName("text");
    console.log(txt);
    if(color == "black"){
        for(let elm of txt){
            elm.style.color = "white"
            console.log(elm)
        }
    }else{
        for(let elm of txt){
            elm.style.color = "black"
            console.log(elm)
        }
    }
}

