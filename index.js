const box1P = document.getElementById("box1-p")
const box2P = document.getElementById("box2-p")
const box3P = document.getElementById("box3-p")
const inputBox = document.getElementById("input-box")
const convertBTN = document.getElementById("convert-btn")


convertBTN.addEventListener("click",function(){
    let convertMtF = inputBox.value * 3.28084 // convert Miters to Feet
    let convertLtG = inputBox.value * 0.2199692 //convert Liters to Gallons
    let convertKtP = inputBox.value * 2.204623  //convert Killos to Pounds
    let convertPtK = inputBox.value * 0.4535924 // convert Pounds to Killos
    
    box1P.innerHTML = `${inputBox.value} meters = ${convertMtF} feet | ${inputBox.value} feet = ${inputBox.value * 0.3048 } meters`
    box2P.innerHTML = `${inputBox.value} liters = ${convertLtG} gallons | ${inputBox.value} gallons = ${inputBox.value * 4.54609} liters`
    box3P.innerHTML = `${inputBox.value} kilos = ${convertKtP} pounds | ${inputBox.value} pounds = ${convertPtK} kilos`
})
