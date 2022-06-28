const test = document.getElementById("test")
const myarrayp = document.getElementById("myarrayp")
const arrayai = document.getElementById("arrayai")


let newfunc = false


let boxArray = [0,1,2,3,4,5,6,7,8]
let myArray = []
let aiArray = []


let getID

document.addEventListener("click", e=>{
        getID = event.target.id
        document.getElementById(getID).style.backgroundColor = "blue";
})
document.getElementById("next").addEventListener("click", e=>{
        window.location.assign("./page3/index.html"); 
})


