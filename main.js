function animeBalle (){
    balle.x += vx;
    vy += g * dt;
    balle.y += vy * dt;
    if(balle.x > button.offsetWidth - balle.radius || balle.x < button.offsetLeft + balle.radius){
        vx *= -1;
    }
    if(balle.y > button.offsetTop - 7){
        vy *= -1;
        balle.y = button.offsetTop - 7;
        button.classList.add("active");
    }
    else{
        button.classList.remove("active");
    }
}

function animation(){
    requestAnimationFrame(animation);
    draw();
    update();
}
animation();

function draw(){
    dessin.clearRect(0,0,width,height);
    drawGameObjects(dessin,"fill",balle);
}
function update(){
    animeBalle();
}

bloks.forEach(block => {
    block.addEventListener("animationend", () =>{
        //alert("ok");
        for(let b = 0; b < bloks.length; b++){
            let bl = bloks[b];
            bl.classList.remove("active");
        }
        canActive += 1;
        if(canActive > (bloks.length - 1)){
            canActive = 0;
        }
        bloks[canActive].classList.add("active");
    })
})
