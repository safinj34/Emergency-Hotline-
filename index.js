const heart=document.getElementsByClassName("heartIcon")

for(let hearts of heart){hearts.addEventListener("click",function(){



let heartIncrease=document.getElementById("heartCount").innerText

let heartNumber=Number(heartIncrease)

let finalHeart=heartNumber + 1

hearts.classList.remove("grayscale-100")

document.getElementById("heartCount").innerText=finalHeart
})}










const callButton=document.getElementsByClassName("callButton")

for(let callbuttons of callButton){callbuttons.addEventListener("click",function(){

    const callButtonPressed=callbuttons.parentNode.parentNode.children[1].innerText
   
    const callButtonPressedNumber=callbuttons.parentNode.parentNode.children[3].innerText

    let coin=document.getElementById("coin").innerText
    let coinNumber=Number(coin)
   if(coinNumber>=20) {let coinNumberchanged=coinNumber-20
    document.getElementById("coin").innerText=coinNumberchanged
     alert(callButtonPressed+" "+ ": "+ callButtonPressedNumber)
     let now=new Date()

let history=document.getElementById("history")
let historyCreated=document.createElement("div")
historyCreated.innerHTML=`<div class="flex justify-between items-center py-4 my-4 bg-white"><div class="p-6"><h1 class="text-2xl font-bold">${callButtonPressed}</h1><p class="bg-gray-50">${callButtonPressedNumber}</p></div><div><h2 class="bg-gray-50 p-4">${now.toLocaleTimeString()}</h2></div></div>
`

history.append(historyCreated)
}
else{alert("Not Enough Coin")}







})}




document.getElementById("clear").addEventListener("click",function(){
  let clearButton= document.getElementById("history")
  clearButton.innerHTML=``
})



let copy=document.getElementsByClassName("copyButton")
for(let copys of copy){
copys.addEventListener("click",function(){
        copyCount=document.getElementById("copyCount").innerText
    copyCountNumber=Number(copyCount)
    copyCountNumberPlus=copyCountNumber + 1
document.getElementById("copyCount").innerText=copyCountNumberPlus


let copies=copys.parentNode.parentNode.children[1].innerText
let copiess=copys.parentNode.parentNode.children[3].innerText

 let copyToText=copies+" "+copiess
 navigator.clipboard.writeText(copyToText)
})
}