window.addEventListener("load",()=>{
    const buttonChangeImg= document.querySelector(".imgChange")
    const inputImg = document.getElementById("avatar")
    inputImg.addEventListener("click",(e)=>{
        console.log(e);
    })
    buttonChangeImg.addEventListener("click",(e)=>{
        const avatar = document.getElementById("avatar")
        avatar.click()
    })
})