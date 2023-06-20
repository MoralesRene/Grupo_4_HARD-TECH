window.addEventListener("load",()=>{
    const opciones = document.querySelectorAll(".opcionCheck")
    const formCreate = document.getElementById("formCreate")
    opciones.forEach(opcion => {
        opcion.addEventListener("change",(e)=>{
            if (e.target.value=="PC") {
                formCreate.marca.style.display="none"
                formCreate.family.style.display="none"
                formCreate.model.style.display="none"
                const noPC= document.querySelectorAll(".no-pc")
                noPC.forEach(label=>{
                    label.style.display="none"
                })
            } else {
                formCreate.marca.style.display="block"
                formCreate.family.style.display="block"
                formCreate.model.style.display="block"
                const noPC= document.querySelectorAll(".no-pc")
                noPC.forEach(label=>{
                    label.style.display="block"
                })
            }
        })
    });
    
})