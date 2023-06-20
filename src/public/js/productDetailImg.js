
window.addEventListener("load",()=>{
    
    const imagesContain= document.getElementById("containImages")
    const cantidadImg = imagesContain.dataset.width 
        imagesContain.style.width =`calc(100% * ${cantidadImg})`

        let valorInicial = 0
    const AnchoImagen = 100/cantidadImg
    const btnRight = document.querySelector(".btnImages.right")
    const btnleft = document.querySelector(".btnImages.left")
   const images = document.querySelectorAll(".imgProducts")
   images.forEach(img=>{
    img.style.width = `calc(100% / ${cantidadImg})`
   })
    btnRight.addEventListener("click",(e)=>{
        sumar()
        imagesContain.style.transform = `translateX(calc(-${valorInicial}%))`
    })
    btnleft.addEventListener("click",(e)=>{
        restar()
        imagesContain.style.transform = `translateX(calc(-${valorInicial}%))`
    })
    function sumar() {
        if (valorInicial<AnchoImagen*(images.length -1)) {
            valorInicial+=AnchoImagen
        }else{
            imagesContain.style.transform = "none"
        }
    }
    function restar() {
        if(valorInicial>0){
            valorInicial-=AnchoImagen
        }else{
            imagesContain.style.transform = "translateX(0)"
        }
    }
})

