const test = document.getElementById("test")
const myarrayp = document.getElementById("myarrayp")
const arrayai = document.getElementById("arrayai")


let newfunc = false


let boxArray = [0,1,2,3,4,5,6,7,8]
let myArray = []
let aiArray = []

document.getElementById("example").addEventListener("click", e=>{
    document.getElementById("example").style.display = "none";
    document.getElementById("pomme").style.display = "block";
    document.getElementById("shit💩").style.display = "block";
    document.getElementById("beaugosse").style.display = "block";
})


let getID

document.addEventListener("click", e=>{
        getID = event.target.id



        if(newfunc===false){
            document.getElementById("div").innerHTML = getID;
        }
})

document.getElementById("next").addEventListener("click", e=>{
    window.location.assign("./page2/index.html"); 
})
