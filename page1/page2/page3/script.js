const BoxArrayParagraphe = document.getElementById("BoxArray")
const MyArrayParagraphe = document.getElementById("MyArray")
const arrayai = document.getElementById("arrayai")




let BoxArray = [0,1,2,3,4,5,6,7,8]
let MyArray = []
let BotArray = []

BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
MyArrayParagraphe.innerHTML = "MyArray : " + MyArray

let getID

document.getElementById("table").addEventListener("click", e=>{
        getID = event.target.id
        if(getID === "1" || getID === "2" || getID === "3" || getID === "4" || getID === "5" || getID === "6" || getID === "7" || getID === "8" || getID === "9" || getID === "0"){
                document.getElementById(getID).style.backgroundColor = "blue";
                BoxArray.splice(BoxArray.indexOf(parseInt(getID)), 1)
                MyArray.push(parseInt(getID))
                BoxArrayParagraphe.innerHTML = "BoxArray : " + BoxArray
                MyArrayParagraphe.innerHTML = "MyArray : " + MyArray
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
        }

})







document.getElementById("splice").addEventListener("click", e=>{
        document.getElementById("spliceimg").style.display = "block"
})
document.getElementById("spliceimg").addEventListener("click", e=>{
        document.getElementById("spliceimg").style.display = "none"
})
document.getElementById("indexof").addEventListener("click", e=>{
        document.getElementById("indexofimg").style.display = "block"
})
document.getElementById("indexofimg").addEventListener("click", e=>{
        document.getElementById("indexofimg").style.display = "none"
})
document.getElementById("next").addEventListener("click", e=>{
        window.location.assign("./page4/index.html") 
})

