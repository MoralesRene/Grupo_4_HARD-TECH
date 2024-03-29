window.addEventListener("load",()=>{
    function msgNotificacion() {
        const msg = document.createElement("div")
        const body = document.querySelector("body")
        msg.setAttribute("id","notification")
        msg.classList.add("notification")
        msg.innerText = "Se agrego este producto al carrito"
        msg.classList.add("success")
        msg.style.display = "flex"
        body.append(msg)
        msg.addEventListener("mouseover",(e)=>{
                msg.style.display = "flex"
        })
        msg.addEventListener("mouseout",(e)=>{
            tiempoDeMuestra()
        })
        msg.addEventListener("click",()=>{
            msg.remove()
        })
        tiempoDeMuestra()
    }
    function tiempoDeMuestra() {
        setTimeout(() => {
            const msg = document.getElementById("notification")
            msg.remove()
        }, 5000);
    }
    const contador = document.querySelector("div.quantity")
    function carritoLength() {
        return localStorage.cart? JSON.parse(localStorage.cart).length : 0
    }
    contador.innerText = carritoLength()
    const botones = document.querySelectorAll(".addCarrito")
   
    botones.forEach(boton=>{
        boton.addEventListener("click",(e)=>{
           if (localStorage.cart) {
                const carrito = JSON.parse(localStorage.cart)
                const index = carrito.findIndex(item=> item.id==boton.dataset.id)
                
                if (index ==-1) {
                    carrito.push({id:boton.dataset.id,quantity:1})
                }else{
                    carrito[index].quantity++
                }

                localStorage.setItem("cart",JSON.stringify(carrito))
           }else{
                localStorage.setItem("cart",JSON.stringify([{id:boton.dataset.id,quantity:1}]))
           }
           contador.innerText = carritoLength()
           msgNotificacion()
        })
    })
})