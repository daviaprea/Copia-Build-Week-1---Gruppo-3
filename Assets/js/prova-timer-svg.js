let progValue=document.getElementById("seconds");
progValue.innerHTML=20;
progBar=Number(progValue.innerHTML);

let prog=setInterval(()=>{
    
    progValue.innerHTML=Number(progValue.innerHTML)-1;

    if(progValue.innerHTML=="0") clearInterval(prog);

}, 1000);