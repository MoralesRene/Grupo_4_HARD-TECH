window.addEventListener("load",()=>{
    const thContain = document.getElementById("thContain")
    if (screen.width < 600) {
        thContain.innerHTML = '<th class="tableHeader">#</th><th class="tableHeader">Producto</th><th class="tableHeader">Unid.</th><th class="tableHeader">Precio</th><th class="tableHeader">SubTotal</th>'
    }else{
        thContain.innerHTML = '<th class="tableHeader">#</th><th class="tableHeader">Fotos</th><th class="tableHeader">Producto</th><th class="tableHeader">Unid.</th><th class="tableHeader">Precio</th><th class="tableHeader">SubTotal</th>'
    }
})