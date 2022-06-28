const BoxArrayParagraphe = document.getElementById("BoxArray")
const MyArrayParagraphe = document.getElementById("MyArray")
const BotArrayParagraphe = document.getElementById("BotArray")


let brainCounter = 1




let BoxArray = [0,1,2,3,4,5,6,7,8]
let MyArray = []
let BotArray = []

let randomNumber
let BotID

BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
MyArrayParagraphe.innerHTML = "MyArray : " + MyArray
BotArrayParagraphe.innerHTML = "BotArray : " + BotArray

let getID
let result = false


function botNumber(){
        if(result === false){
                randomNumber = Math.floor(Math.random() * BoxArray.length);
                BotID = BoxArray[randomNumber]
                BoxArray.splice(BoxArray.indexOf(BotID), 1)
                BotArray.push(BotID)
                document.getElementById(BotID).style.backgroundColor = "red";
                BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                BotArrayParagraphe.innerHTML = "BotArray : " + BotArray
        }

}

document.getElementById("table").addEventListener("click", e=>{
        if(result === false){
                getID = event.target.id
                if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                        document.getElementById(getID).style.backgroundColor = "blue";
                        BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                        MyArray.push(getID)
                        BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                        MyArrayParagraphe.innerHTML = "MyArray : " + MyArray           
                }
                setTimeout(checkResult, 200)
                setTimeout(botNumber,500)
        }

})
document.getElementById("table1").addEventListener("click", e=>{
        if(result === false){
                getID = event.target.id
                if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                        document.getElementById(getID).style.backgroundColor = "blue";
                        BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                        MyArray.push(getID)
                        BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                        MyArrayParagraphe.innerHTML = "MyArray : " + MyArray           
                }
                setTimeout(checkResult, 200)
                setTimeout(botNumber,500)
        }
})
document.getElementById("table2").addEventListener("click", e=>{
        if(result === false){
                getID = event.target.id
                if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                        document.getElementById(getID).style.backgroundColor = "blue";
                        BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                        MyArray.push(getID)
                        BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                        MyArrayParagraphe.innerHTML = "MyArray : " + MyArray           
                }
                setTimeout(checkResult, 200)
                setTimeout(botNumber,500)
        }
})

document.getElementById("brain").addEventListener("click", e=>{
        document.getElementById("brain").style.display = "none";
})



function checkResult(){
     if(MyArray.includes("0") && MyArray.includes("3") && MyArray.includes("6")){
        alert("BRAVO !!!")
        result = true  
     }  
}