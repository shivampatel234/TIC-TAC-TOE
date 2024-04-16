let box = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset-btn");
let NewGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector(".msg") 



let currunt= true;
const winpattern = [
    [0,1,2],[0,3,6],
    [3,4,5],[1,4,7],
    [6,7,8],[2,5,8],
    [0,4,8],[2,4,6]
]

const resetGame = () =>{
    currunt = true;
    enabled();

    
}; 





box.forEach((box) =>{
    box.addEventListener("click",()=>{
       

        if(currunt){
            box.innerText = "O"
            box.style.color = " green"
            currunt=false;
        }
        else{
            box.innerText = "X";
            box.style.color = "blue"
            currunt = true;
        }
        box.disabled = true;

        checkwinner();
    });
});


// const showWinner = (Winner)=>{
//     msg.innerText = "congratulation you are a Winner";
//     // msgContainer.classList.remove("hide");

// }

const disabled = () =>{
    for (let bo of box){
        bo.disabled = true;
    }
}

const enabled = () =>{
    for (let bo of box){
        bo.disabled = false;
        bo.innerText = " "
    }
}


// const showWinner = (winner)=>{
//     msg.innerText = `Congratulation winner is ${winner}`
//     msgContainer.classList.remove(".hide")
// }



const checkwinner = () =>{
    for(let pattern of winpattern ){

        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     box[pattern[0]].innerText,
        //     box[pattern[1]].innerText,
        //     box[pattern[2]].innerText)

            let pos1val = box[pattern[0]].innerText;
            let pos2val = box[pattern[1]].innerText;
            let pos3val = box[pattern[2]].innerText;

        if(pos1val != "" && pos2val != "" && pos3val !=""){
            if(pos1val===pos2val && pos2val === pos3val){

               
            //   showWinner();
                
            
            }
            
        }



    }
}
// NewGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);