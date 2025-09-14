let btns=document.querySelectorAll(".btn");
let reset=document.querySelector("#reset");
let newGame=document.querySelector("#new");
let mes=document.querySelector(".mes")
let turn =true;
const arr = [
  [0, 1, 2], 
  [3, 4, 5], 
  [6, 7, 8], 
  [0, 3, 6], 
  [1, 4, 7], 
  [2, 5, 8], 
  [0, 4, 8], 
  [2, 4, 6]  
];
btns.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(box.innerText==''){
        if(turn){
            box.innerText="O";
            turn=false;
        }else{
            box.innerText="X";
            turn=true;
        }
    }
    checkWinner();
    })
})

const showWinner=(val)=>{
    mes.innerText="Winner Is "+val;
    mes.classList.remove("hide");
    disableBtns();
}
const disableBtns = () => {
  btns.forEach((box) => box.disabled = true);
};

const enableBtns = () => {
  btns.forEach((box) => {
    box.innerText = "";
    box.disabled = false;
  });
};
reset.addEventListener("click", () => {
  enableBtns();
  mes.classList.add("hide");
  turn = true;
});

newGame.addEventListener("click", () => {
  enableBtns();
  mes.classList.add("hide");
  turn = true;
});


const checkWinner = () => {
  for (let pattern of arr) {
    let pos1Val = btns[pattern[0]].innerText;
    let pos2Val = btns[pattern[1]].innerText;
    let pos3Val = btns[pattern[2]].innerText;

    if (pos1Val !== "" && pos2Val !== "" && pos3Val !== "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        showWinner(pos1Val);
        return; 
      }
    }
  }

  let allFilled = true;
  btns.forEach((box) => {
    if (box.innerText === "") {
      allFilled = false;
    }
  });

  if (allFilled) {
    mes.innerText = "It's a Draw!";
    mes.classList.remove("hide");
    disableBtns();
  }
};
