let sindex=1;
revealslides(sindex);

function plssliders(n){
    revealslides(sindex+=n);
}

function actualslide(n){
    revealslides(sindex=n);
}

function revealslides(n){

    let i;
    let sliders= document.getElementsByClassName("gallerysliders");
    let squares=document.getElementsByClassName("point");
    let captiontxt=document.getElementById("subtitle");
    if(n>sliders.length) {sindex=1}
    if(n<1){sindex=sliders.length}

    for(i=0; i<sliders.length;i++){
        sliders[i].style.display= "none";
    }

    for(i=0;i<squares.length;i++){
       squares[i].className=squares[i].className.replace(" active", "");
    }

    sliders[sindex-1].style.display="block";
    squares[sindex-1].className+="active";
    captiontxt.innerHTML=squares[sindex-1].alt;
    
}