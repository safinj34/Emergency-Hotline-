const heart=document.getElementsByClassName("heartIcon")

for(let hearts of heart){hearts.addEventListener("click",function(){



let heartIncrease=document.getElementById("heartCount").innerText

let heartNumber=Number(heartIncrease)

let finalHeart=heartNumber + 1

hearts.classList.remove("grayscale-100")

document.getElementById("heartCount").innerText=finalHeart
})}