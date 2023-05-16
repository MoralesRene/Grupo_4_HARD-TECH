window.onload = function () {
    const form = document.getElementById("formRegister")
    const divError = document.querySelectorAll(".message")
    const btnRegister = document.getElementById("registerbtn")
    const inputForm = document.querySelectorAll(".formInput")
    const span = document.querySelectorAll("span")

    for (let i = 0; i < inputForm.length; i++) {
        const msgErrores = [
            "El nombre debe tener minimo 3 caracteres",
            "Ingrese un email valido",
            "El telefono debe tener 8 o mas numeros",
            "El DNI/CUIT debe tener minimo 8 numeros",
            "la contraseña debe tener al menos 8 caracteres",
            "error"
        ]
        inputForm[i].addEventListener("change",()=>{
            if (inputForm[i].value.length<3 ) {
                inputForm[i].style.borderBottom = "3px solid red"
                divError[i].innerHTML = msgErrores[i]
                span[i].style.display ="block"
                span[i].innerHTML ='<i class="fa-solid fa-xmark"></i>'
                span[i].classList.add("is-invalid")
                span[i].classList.remove("valid")
                
            }else{
                span[i].style.display ="block"
                span[i].innerHTML ='<i class="fa-solid fa-check"></i>'
                span[i].classList.toggle("is-invalid")
                span[i].classList.add("valid")
                divError[i].innerHTML =""
            }

        inputForm[i].addEventListener("focus",()=>{
            inputForm[i].style.borderBottom = "3px solid black"
        })
        })
    }

    form.addEventListener("submit", (e) => {
        e.preventDefault()
        const errors = []

        divError.forEach(element => {
            element.innerHTML = ""
        })
        for (let i = 0; i < inputForm.length; i++) {
            
            if (!inputForm[i].value ) {
                errors.push({ name: inputForm[i].name, msg: `Este campo no puede estar vacio` })
            }
        }
        if (form.contrasenia.value != form.contrasenia2.value){
            errors.push({name:"contrasenia2", msg: "Las contraseñas deben coincidir"})
            console.log(errors);
        }
        errors.forEach(error => {
            const message = document.getElementById(`error-${error.name}`)
            message.innerHTML = error.msg

        })
        if (errors.length == 0) {
           form.submit()
        }
    })
}