window.addEventListener("load", () => {
    const svg = "checkbox-checked.svg"
    const imgCheck = document.querySelectorAll("#checkImg")
    const botones = document.querySelectorAll(".filter")
    //boton precio min y max
    const btnRange = document.getElementById("btnRange")
    //inputs valores min y max
    const Min = document.getElementById("MinPrice")
    const Max = document.getElementById("MaxPrice")
    //valores por defecto, necesario?
    Min.value = Min.value ? value : 0
    Max.value = Max.value ? value : 200000

    botones.forEach((boton, index) => {
        boton.addEventListener("click", (e) => {

            const paramsSearch = new URLSearchParams(location.search)
            if (paramsSearch.has("filter")) {
                paramsSearch.set("filter", boton.textContent)
                location.href = location.pathname + "?" + paramsSearch.toString()
            } else {
                paramsSearch.append("filter", boton.textContent)
                location.href = location.href + "?" + paramsSearch.toString()
            }
        })
        //estilo boton filtrado
        const valorBoton = boton.textContent
        if (location.search.includes(valorBoton)) {
            console.log("tiene el nombre del boton " + valorBoton);
            imgCheck[index].src = `/img/${svg}`
            boton.classList.add("active")
        }
    })


    btnRange.addEventListener("click", () => {
        const paramPrice = new URLSearchParams(location.search)
        if (paramPrice.has("min") && paramPrice.has("max")) {
            paramPrice.set("min", Min.value)
            paramPrice.set("max", Max.value)
            location.href = location.pathname + "?" + paramPrice.toString()
        } else {
            paramPrice.append("min", Min.value)
            paramPrice.append("max", Max.value)
            location.href = location.pathname + "?" + paramPrice.toString()
        }
    })
    //Orden de productos
    const orderInput = document.querySelectorAll(".order")
    
    orderInput.forEach((input,index)=>{
        input.addEventListener("change",(e)=>{
            const paramOrder = new URLSearchParams(location.search)
            if (paramOrder.has("or")) {
                paramOrder.set("or", index)
                location.href = location.pathname + "?" + paramOrder.toString()
    
            } else {
                paramOrder.append("or", index)
                location.href = location.pathname + "?" + paramOrder.toString()
            }
        })
            if (location.search.includes("or="+ index)) {
                console.log("cambio en el indice"+index);
            }
    })
    //ocultar filtros 
    const buttonClear = document.getElementById("clearFilter")
    buttonClear.addEventListener("click",()=>{
        location.href = location.pathname
    })
})
