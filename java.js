let user=0;
let comp=0;
const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");
const user_score=document.querySelector("#you");
const comp_score=document.querySelector("#comp");

const comps=()=>{
    const arr=["rock","paper","scissors"];
    const index=Math.floor(Math.random()*3);
    console.log(index);
    return arr[index];
}

const winner=(userwin)=>{
if(userwin){
    console.log("you won");
    user++;
    user_score.innerText=user;
    msg.innerText="you won";
    msg.style.backgroundColor="green";
}
else{
    console.log("you lost");
    comp++;
    comp_score.innerText=comp;
    msg.innerText="you loose";
    msg.style.backgroundColor="red";
    msg.style.color="yellow";
}
}

const draw=()=>{
    console.log("draw");
    msg.innerText="game draw";
    msg.style.color="red";
    msg.style.backgroundColor="yellow";
}

const playgame=(ids)=>{
    console.log("user choose",ids);
    const comp_choice=comps();
    console.log("comp choose",comp_choice);

if(ids===comp_choice){
   draw();
}
else{
    let userwin=true;
    if(ids==="rock"){
        //scissor,paper
        userwin=comp_choice==="paper" ? false : true;
    }
    else if(ids==="paper"){
      //rock,scissor
      userwin=comp_choice==="rock" ? true : false;
    }
    else{
        //rock,paper
        userwin=comp_choice==="rock" ? false:true;
    }
   winner(userwin);
}
};

choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const ids=choice.getAttribute("id");
        playgame(ids);
    });
});