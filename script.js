const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
    fulImg.classList.add("modalOpen")
}
function closeImg(){
    fulImgBox.style.display = "none";
}

document.addEventListener("click", (event) => {
    console.log()
    if(event.target.classList.contains("img")){
        return true
    }
    if(fulImg.classList.contains("modalOpen")){
        fulImgBox.style.display = "none";
        fulImg.classList.remove("modalOpen")
        console.log("pipo")
    }
    console.log("caca")
})
