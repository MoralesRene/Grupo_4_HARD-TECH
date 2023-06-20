window.addEventListener("load",()=>{
    const logo = document.getElementById("logo")
    logo.addEventListener("click",()=>{
        location.href= "/"
    })
})
const btnPerifericos = document.getElementById("fondoPerifericos")
const btnPC = document.getElementById("fondoPc")

if (btnPerifericos) {
    btnPerifericos.addEventListener("click",()=>{
        location.href= `/product/list/Perifericos`
    })
}
if (btnPC) {
    btnPC.addEventListener("click",()=>{
        location.href= `/product/list/PCs`
    })
}
