let randomNumber 
let botID
let getID
let turn = 1
let result = false

let BoxArray = [0,1,2,3,4,5,6,7,8]
let MyArray = []
let BotArray = []


document.addEventListener("click", e=>{
    if(result === false){
        getID = event.target.id
        if(BoxArray.includes(parseInt(getID))){
            BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
            MyArray.push(getID)
            document.getElementById(getID).style.backgroundImage = "url(./crycat.png)";
            FuncResult()
        }
    }
})

function botNumber(){
    if(result===false){
        turn = 2;
        randomNumber = Math.floor(Math.random() * BoxArray.length);
        botID = BoxArray[randomNumber]
        BoxArray.splice(BoxArray.indexOf(botID), 1)
        BotArray.push(botID)
        document.getElementById(botID).style.backgroundImage = "url(./dog.png)";
        FuncResult()
    }
}

document.getElementById("presentation").addEventListener("click", e=>{
    window.location.assign("./page1/index.html")
})




function FuncResult(){
    /****************************condition victoire*************************************/
    if  (MyArray.includes("0") && MyArray.includes("1") && MyArray.includes("2")){
        document.getElementById("win").style.display = "block";
        result = true
        document.getElementById("0").style.animation = "anim 0.2s linear infinite"
        document.getElementById("1").style.animation = "anim 0.2s linear infinite"
        document.getElementById("2").style.animation = "anim 0.2s linear infinite"
    }
    if  (MyArray.includes("3") && MyArray.includes("4") && MyArray.includes("5")){
        document.getElementById("win").style.display = "block";
        document.getElementById("3").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("5").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (MyArray.includes("6") && MyArray.includes("7") && MyArray.includes("8")){
        document.getElementById("win").style.display = "block";
        document.getElementById("6").style.animation = "anim 0.2s linear infinite"
        document.getElementById("7").style.animation = "anim 0.2s linear infinite"
        document.getElementById("8").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (MyArray.includes("0") && MyArray.includes("3") && MyArray.includes("6")){
        document.getElementById("win").style.display = "block";
        document.getElementById("0").style.animation = "anim 0.2s linear infinite"
        document.getElementById("3").style.animation = "anim 0.2s linear infinite"
        document.getElementById("6").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (MyArray.includes("1") && MyArray.includes("4") && MyArray.includes("7")){
        document.getElementById("win").style.display = "block";
        document.getElementById("1").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("7").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (MyArray.includes("2") && MyArray.includes("5") && MyArray.includes("8")){
        document.getElementById("win").style.display = "block";
        document.getElementById("2").style.animation = "anim 0.2s linear infinite"
        document.getElementById("5").style.animation = "anim 0.2s linear infinite"
        document.getElementById("8").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (MyArray.includes("0") && MyArray.includes("4") && MyArray.includes("8")){
        document.getElementById("win").style.display = "block";
        document.getElementById("0").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("8").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (MyArray.includes("2") && MyArray.includes("4") && MyArray.includes("6")){
        document.getElementById("win").style.display = "block";
        document.getElementById("2").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("6").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    /**********************condition victoire pour bot************************************/
    if  (BotArray.includes(0) && BotArray.includes(1) && BotArray.includes(2)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("0").style.animation = "anim 0.2s linear infinite"
        document.getElementById("1").style.animation = "anim 0.2s linear infinite"
        document.getElementById("2").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(3) && BotArray.includes(4) && BotArray.includes(5)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("3").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("5").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(6) && BotArray.includes(7) && BotArray.includes(8)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("6").style.animation = "anim 0.2s linear infinite"
        document.getElementById("7").style.animation = "anim 0.2s linear infinite"
        document.getElementById("8").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(0) && BotArray.includes(3) && BotArray.includes(6)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("0").style.animation = "anim 0.2s linear infinite"
        document.getElementById("3").style.animation = "anim 0.2s linear infinite"
        document.getElementById("6").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(1) && BotArray.includes(4) && BotArray.includes(7)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("1").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("7").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(2) && BotArray.includes(5) && BotArray.includes(8)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("2").style.animation = "anim 0.2s linear infinite"
        document.getElementById("5").style.animation = "anim 0.2s linear infinite"
        document.getElementById("8").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(0) && BotArray.includes(4) && BotArray.includes(8)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("0").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("8").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if  (BotArray.includes(2) && BotArray.includes(4) && BotArray.includes(6)){
        document.getElementById("lose").style.display = "block";
        document.getElementById("2").style.animation = "anim 0.2s linear infinite"
        document.getElementById("4").style.animation = "anim 0.2s linear infinite"
        document.getElementById("6").style.animation = "anim 0.2s linear infinite"
        result = true
    }
    if(result===false && turn===1){
        setTimeout(botNumber, 500);
    }
    if(result===false && turn===2){
        turn = 1
    }
}

