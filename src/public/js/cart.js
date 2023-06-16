const pedido = []
function calculoTotal(products) {
    return products.reduce((acum, product) => acum += product.price * product.quantity, 0)
}
window.addEventListener("load", () => {
    const content = document.getElementById("content")

    if (localStorage.cart) {
        const carrito = JSON.parse(localStorage.cart)
        carrito.forEach((product, index) => {
            fetch(`/api/products/${product.id}`)
                .then(res => res.json())
                .then(data => {
                    if (data) {
                        if (screen.width < 600) {
                            content.innerHTML += `<tr id=${index}>
                    <td>${index + 1}</td>
                    <td>${data.name}</td>
                    <td>${product.quantity}</td>
                    <td>$${parseInt(data.price)}</td>
                    <td>$${parseInt(data.price * product.quantity)}</td>
                    <td><button  id='quitar'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>`;
                        } else {
                            content.innerHTML += `<tr id=${index}>
                    <td>${index + 1}</td>
                    <td><img src="/img/products/${data.images[0].url}" id='imagesTable'/></td>
                    <td>${data.name}</td>
                    <td>${product.quantity}</td>
                    <td>$${parseInt(data.price)}</td>
                    <td>$${parseInt(data.price * product.quantity)}</td>
                    <td><button  id='quitar'><i class="fa-solid fa-trash"></i></button></td>
                    </tr>`;
                        }
                        pedido.push({
                            products_id: data.id,
                            price: data.price,
                            quantity: product.quantity,
                            total: data.price * product.quantity
                        })
                    } else {
                        carrito.splice(index, 1)
                        localStorage.setItem(JSON.stringify(carrito))
                    }

                }).then(() => {
                    const priceTotal = document.getElementById("priceTotal")
                    priceTotal.innerText = `Total: $${calculoTotal(pedido)}`
                })
        });
    } else {
        if (screen.width< 600) {
            content.innerHTML += "<tr><td  colspan='5'>No hay productos en el carrito</td></tr>"
        } else {
            content.innerHTML += "<tr><td  colspan='6'>No hay productos en el carrito</td></tr>"

        }
        const next = document.querySelector("button#next a")
        next.addEventListener("click", (e) => {
            e.preventDefault()
        })
    }
})
const vaciarCarrito = function () {
    localStorage.clear()
    return location.reload()
}
const formCheckout = document.getElementById("formContain")

formCheckout.addEventListener("submit",(e)=>{
    e.preventDefault()
    const cartInfo = {
        orderitems: pedido,
        paymentMethod: formCheckout.payment.value,
        shippingMethod: formCheckout.shipping.value,
        total: calculoTotal(pedido)
    }
    console.log(cartInfo);
    fetch("/api/checkout",{
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(cartInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        if (data.estado==true) {
            localStorage.clear()
            const success= document.createElement("div")
            const body = document.querySelector("body")
            success.classList.add("successfulPurchase")
            success.classList.add("success")
            success.style.display="flex"
            success.innerHTML=`Compra Exitosa, numero de pedido: ${data.order.id},monto total: $${data.order.total}<br>Gracias por su compra!`
            body.append(success)
            setTimeout(()=>{
                const mensaje = document.querySelector(".successfulPurchase")
                mensaje.remove()
                location.href="/profile"
            },5000)
        }
    })
})