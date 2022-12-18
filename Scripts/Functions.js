
function InsertElements(element){
  MainCard.innerHTML = ''

  MainCard.insertAdjacentHTML("afterbegin", element)
  if (Status === "Section") MainCard.insertAdjacentHTML("beforeEnd", Links2)
  else MainCard.insertAdjacentHTML("beforeEnd", Links)
}

function AnimarSection(section){
    MainCard.style.animationName = "Show-up"
    MainCard.style.animationDuration = ".9s"
    MainCard.style.opacity = "0"
    //setAttribute('style', "animation-name:Show-up;animation-duration: 1.5s;animation-iteration-count:initial;")
    MainCard.addEventListener("animationend", ()=> {
      InsertElements(section)
      MainCard.style.animationName = "Show-down"
      MainCard.style.opacity = "1"
    })
    
}