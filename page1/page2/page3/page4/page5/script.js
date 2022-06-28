const BoxArrayParagraphe = document.getElementById("BoxArray")
const MyArrayParagraphe = document.getElementById("MyArray")
const BotArrayParagraphe = document.getElementById("BotArray")
const BrainParagrapge = document.getElementById("braindialog")

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



function botNumber(){
        randomNumber = Math.floor(Math.random() * BoxArray.length);
        BotID = BoxArray[randomNumber]
        BoxArray.splice(BoxArray.indexOf(BotID), 1)
        BotArray.push(BotID)
        document.getElementById(BotID).style.backgroundColor = "red";
        BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
        BotArrayParagraphe.innerHTML = "BotArray : " + BotArray
        BrainParagrapge.innerHTML = "J'ai choisi " + randomNumber + " et j'ai mis mon symbole à " + BotID + ". J'ai ajouté dans BotArray aussi. A vous de jouer Mr Developpeur..."
}

document.getElementById("next").addEventListener("click", e=>{
        window.location.assign("./page6/index.html")
})

document.getElementById("table").addEventListener("click", e=>{
        getID = event.target.id
        if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                document.getElementById(getID).style.backgroundColor = "blue";
                BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                MyArray.push(parseInt(getID))
                BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                MyArrayParagraphe.innerHTML = "MyArray : " + MyArray
                if(brainCounter ===2){
                        BrainParagrapge.innerHTML = "Je pense je dois choisir un numero entre 0 et " + BoxArray.length
                }
                if(brainCounter >=5){
                        BrainParagrapge.innerHTML = "Est-que vous pouvez m'expliquer les conditions de victoire cher Mr Developpeur..."
                }
        }

})
document.getElementById("table1").addEventListener("click", e=>{
        getID = event.target.id
        if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                document.getElementById(getID).style.backgroundColor = "blue";
                BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                MyArray.push(parseInt(getID))
                BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                MyArrayParagraphe.innerHTML = "MyArray : " + MyArray
                if(brainCounter ===2){
                        BrainParagrapge.innerHTML = "Je pense je dois choisir un numero entre 0 et " + BoxArray.length
                }
                if(brainCounter >=5){
                        BrainParagrapge.innerHTML = "Est-que vous pouvez m'expliquer les conditions de victoire cher Mr Developpeur..."
                }
        }

})
document.getElementById("table2").addEventListener("click", e=>{
        getID = event.target.id
        if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                document.getElementById(getID).style.backgroundColor = "blue";
                BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                MyArray.push(parseInt(getID))
                BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                MyArrayParagraphe.innerHTML = "MyArray : " + MyArray
                if(brainCounter ===2){
                        BrainParagrapge.innerHTML = "Je pense je dois choisir un numero entre 0 et " + BoxArray.length
                }
                if(brainCounter >=5){
                        BrainParagrapge.innerHTML = "Est-que vous pouvez m'expliquer les conditions de victoire cher Mr Developpeur..."
                }
        }

})

document.getElementById("brain").addEventListener("click", e=>{
        if(brainCounter ===1){
                document.getElementById("brain").src = "./brain2.png";
                document.getElementById("getID").src = "./length.png";
                BrainParagrapge.innerHTML = "Je pense je dois choisir un numero entre 0 et " + BoxArray.length;               
        }
        if(brainCounter ===2){
                BrainParagrapge.innerHTML = "J'ai choisi 2 alors je dois mettre mon symbole à 2"
        }
        if(brainCounter ===3){
                randomNumber = Math.floor(Math.random() * BoxArray.length);
                document.getElementById("brain").src = "./brain3.png";
                document.getElementById("getID").src = "./BotID.png";
                BrainParagrapge.innerHTML = "J'ai choisi " + randomNumber + " alors je dois mettre mon symbole à " + BoxArray[randomNumber]
        }
        if(brainCounter ===4){
                botNumber()
                document.getElementById("brain").src = "./brain4.png";
                document.getElementById("getID").src = "./botsplice.png";
                document.getElementById("brain").style.height = "350px";
                document.getElementById("brain").style.width = "250px";
                document.getElementById("brain").style.bottom = "-50px";
        }
        setTimeout(braincount(), 200) 
        
})
function braincount(){
        brainCounter++
}







