"strict mode";
const desert=document.getElementById("desert");
const dino=document.getElementById("dino");
const grid=document.getElementById("grid");
console.log(desert,dino,grid);
let gravity=0.9;
let gameOver=false;
let isJumping=false;
let count=0;
let position=0;


document.addEventListener("keydown",(event)=>{
    console.log(event,event.code);
    if(!isJumping){
        jump();

    }

})

function jump(){

    let timerID=setInterval(()=>{

        if(count>15){
            clearInterval(timerID);
            let downTimer=setInterval(()=>{
                if(position<0){
                    isJumping=false;
                    dino.style.bottom=0; 
                    clearInterval(downTimer);
                    dino.style.backgroundImage=`url(StandingSpider.png)`;
                }
                count--
                position-=10;
                position*gravity;
                dino.style.bottom=position+"px";
                console.log(position,count);
            },25)
            
        }
            
            isJumping=true;
            count++;
            position+=15;
            position*=gravity;
            dino.style.bottom=position+"px";
            dino.style.backgroundImage="url('JumpingSpider.png')";
            console.log(position,count);
        }     
    ,25)
    
}