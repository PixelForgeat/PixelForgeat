let slideindex=0;

function slidecontroller(x=slideindex){
    if(x>=0&&x<=2){
        document.getElementById("c"+slideindex).classList.add('content-hidden');
        document.getElementById("c"+slideindex).classList.remove('content');
        document.getElementById("c"+x).classList.add('content');
        document.getElementById("c"+x).classList.remove('content-hidden');
        slideindex=x;
    }
}

