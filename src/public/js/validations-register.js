window.onload = function () {
    const form = document.getElementById("formRegister")
    const divError = document.querySelectorAll(".message")
    const inputForm = document.querySelectorAll(".formInput")
    const span = document.querySelectorAll("span")

    const msgErrores = [
        "El nombre debe contener al menos 3 digitos, y solo acepta letras y espacios",
        "Ingrese un email con formato valido",
        "Este campo debe tener un minimo de 8 numeros",
        "Ingrese el DNI sin puntos ni guiones",
        "la contraseña debe tener al menos 8 caracteres",
        "la contraseña debe tener al menos 8 caracteres"]
    const msgPassword=[
        "La contraseña debe tener al menos una Mayuscula",
        "La contraseña debe tener al menos una Minuscula",
        "La constraseña debe tener al menos un Numero",
        "La contraseña debe tener al menos un caracter especial"
    ]
    for (let i = 0; i < inputForm.length; i++) {
        inputForm[i].addEventListener("blur",()=>{
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
                inputForm[i].style.borderBottom = "3px solid rgb(43, 235, 9)"
                span[i].classList.toggle("is-invalid")
                span[i].classList.add("valid")
                divError[i].innerHTML =""
            }
            
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
                errors.push({ name: inputForm[i].name, msg: msgErrores[i] })
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
    const imgAvatar = document.getElementById("avatar")
    const btnAddImg = document.getElementById("addImg")
    btnAddImg.addEventListener("click",()=>{
     imgAvatar.click()
    })
    const previewAvatar = document.getElementById("previewImg")
       imgAvatar.addEventListener("change",(e)=>{
        if (e.target.files[0]) {
            const reader = new FileReader()
            reader.onload = (e)=>{
                previewAvatar.src=e.target.result
            }
            reader.readAsDataURL(e.target.files[0])   
            console.log("cambio de imagen"); 
        } else {
            previewAvatar.src= "/img/avatars/default.jpg"
        }
    })
}