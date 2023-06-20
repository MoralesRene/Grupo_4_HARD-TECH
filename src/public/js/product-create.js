window.addEventListener("load", function(){
    let formulario = document.querySelector("#formCreate");

    formulario.addEventListener("submit", function(e) {
        e.preventDefault();

        let campoNombre = document.querySelector("input.name");
        let divErroresNombre = document.querySelector("div.divNombre ul");
        let inputName = document.querySelector("input.name");
        let errorsNombre = [];
        let validationNombre = false;

        if (campoNombre.value == "") {
            errorsNombre.push("Debe ingresar el Nombre del Producto");
            divErroresNombre.innerHTML =
            "<li class='li-validation'>" + errorsNombre + "</li>";
            inputName.classList.add("validationIncorrecto");
            inputName.classList.remove("validationCorrecto");

        } else if(campoNombre.value.length < 5 ){
            errorsNombre.push("El campo debe contener al menos 5 caracteres");
            divErroresNombre.innerHTML =
            "<li class='li-validation'>" + errorsNombre + "</li>";
            inputName.classList.add("validationIncorrecto");
            inputName.classList.remove("validationCorrecto");
            
        } else{
            divErroresNombre.innerHTML = "<li></li>";
            inputName.classList.remove("validationIncorrecto");
            inputName.classList.add("validationCorrecto");
            validationNombre = true;
        }

        let campoDescripcion = document.getElementById("descripcion");
        let divErroresDescripcion = document.querySelector("div.divDescripcion ul");
        let inputDescripcion = document.getElementById("descripcion");
        let errorsDescripcion = [];
        let validationDescripcion = false;

        if (campoDescripcion.value == "") {
            errorsDescripcion.push("Debe ingresar la Descripción del Producto");
            divErroresDescripcion.innerHTML =
            "<li class='li-validation'>" + errorsDescripcion + "</li>";
            inputDescripcion.classList.add("validationIncorrecto");
            inputDescripcion.classList.remove("validationCorrecto");

        } else if(campoDescripcion.value.length < 20 ){
            errorsDescripcion.push("La Descripción debe contener al menos 20 caracteres");
            divErroresDescripcion.innerHTML =
            "<li class='li-validation'>" + errorsDescripcion + "</li>";
            inputDescripcion.classList.add("validationIncorrecto");
            inputDescripcion.classList.remove("validationCorrecto");
            
        } else{
            divErroresDescripcion.innerHTML = "<li></li>";
            inputDescripcion.classList.remove("validationIncorrecto");
            inputDescripcion.classList.add("validationCorrecto");
            validationDescripcion = true;
        }

    let campoImagenProducto = document.querySelector("input.imagen-producto");
        let divErroresImagenProducto = document.querySelector("div.divImagenProducto ul");
        let errorsImagenProducto = [];
        let validationImagenProducto = false;
    
        if(campoImagenProducto.value == ""){
            errorsImagenProducto.push("Debe agregar una imagen con extensión : .jpg, .jpeg, .gif, .png");
            divErroresImagenProducto.innerHTML =
            "<li class='li-validation'>" + errorsImagenProducto + "</li>";
        } else {
            divErroresImagenProducto.innerHTML = "<li></li>";
            validationImagenProducto = true;
            
        }

        let campoCategoria = document.getElementById("categoria");
        let divErroresCategoria = document.querySelector("div.divCategoria ul");
        let selectCategoria = document.getElementById("categoria");
        let errorsCategoria = [];
        let validationCategoria = false;
    
        if(campoCategoria.value == ""){
            errorsCategoria.push("El campo no debe estar vacío");
            divErroresCategoria.innerHTML =
            "<li class='li-validation'>" + errorsCategoria + "</li>";
            selectCategoria.classList.add("validationIncorrecto");
            selectCategoria.classList.remove("validationCorrecto");
        } else {
            divErroresCategoria.innerHTML = "<li></li>";
            selectCategoria.classList.remove("validationIncorrecto");
            selectCategoria.classList.add("validationCorrecto");
            validationCategoria = true;
        }

        let campoMarca = document.getElementById("marca");
        let divErroresMarca = document.querySelector("div.divMarca ul");
        let selectMarca = document.getElementById("marca");
        let errorsMarca = [];
        let validationMarca = false;
    
        if(campoMarca.value == ""){
            errorsMarca.push("El campo no debe estar vacío");
            divErroresMarca.innerHTML =
            "<li class='li-validation'>" + errorsMarca + "</li>";
            selectMarca.classList.add("validationIncorrecto");
            selectMarca.classList.remove("validationCorrecto");
        } else {
            divErroresMarca.innerHTML = "<li></li>";
            selectMarca.classList.remove("validationIncorrecto");
            selectMarca.classList.add("validationCorrecto");
            validationMarca = true;
        }

        let campoStatus = document.getElementById("status");
        let divErroresStatus = document.querySelector("div.divStatus ul");
        let selectStatus = document.getElementById("status");
        let errorsStatus = [];
        let validationStatus = false;
    
        if(campoStatus.value == ""){
            errorsStatus.push("El campo no debe estar vacío");
            divErroresStatus.innerHTML =
            "<li class='li-validation'>" + errorsStatus + "</li>";
            selectStatus.classList.add("validationIncorrecto");
            selectStatus.classList.remove("validationCorrecto");
        } else {
            divErroresStatus.innerHTML = "<li></li>";
            selectStatus.classList.remove("validationIncorrecto");
            selectStatus.classList.add("validationCorrecto");
            validationStatus = true;
        }

        let campoFamiles = document.getElementById("families");
        let divErroresFamilies = document.querySelector("div.divFamilies ul");
        let selectFamilies = document.getElementById("families");
        let errorsFamilies = [];
        let validationfamilies = false;
    
        if(campoFamiles.value == ""){
            errorsFamilies.push("El campo no debe estar vacío");
            divErroresFamilies.innerHTML =
            "<li class='li-validation'>" + errorsFamilies + "</li>";
            selectFamilies.classList.add("validationIncorrecto");
            selectFamilies.classList.remove("validationCorrecto");
        } else {
            divErroresFamilies.innerHTML = "<li></li>";
            selectFamilies.classList.remove("validationIncorrecto");
            selectFamilies.classList.add("validationCorrecto");
            validationfamilies = true;
        }

        let campoWarranty = document.getElementById("warranty");
        let divErroresWarranty = document.querySelector("div.divWarranty ul");
        let inputWarranty = document.getElementById("warranty");
        let errorsWarranty = [];
        let validationWarranty = false;
    
        if(campoWarranty.value == ""){
            errorsWarranty.push("El campo no debe estar vacío");
            divErroresWarranty.innerHTML =
            "<li class='li-validation'>" + errorsWarranty + "</li>";
            inputWarranty.classList.add("validationIncorrecto");
            inputWarranty.classList.remove("validationCorrecto");
        } else {
            divErroresWarranty.innerHTML = "<li></li>";
            inputWarranty.classList.remove("validationIncorrecto");
            inputWarranty.classList.add("validationCorrecto");
            validationWarranty = true;
        }

        let campoModel = document.querySelector("input.model");
        let divErroresModel = document.querySelector("div.divModel ul");
        let inputModel = document.querySelector("input.model");
        let errorsModel = [];
        let validationModel = false;
    
        if(campoModel.value == ""){
            errorsModel.push("El campo no debe estar vacío");
            divErroresModel.innerHTML =
            "<li class='li-validation'>" + errorsModel + "</li>";
            inputModel.classList.add("validationIncorrecto");
            inputModel.classList.remove("validationCorrecto");
        } else {
            divErroresModel.innerHTML = "<li></li>";
            inputModel.classList.remove("validationIncorrecto");
            inputModel.classList.add("validationCorrecto");
            validationModel = true;
        }

        let campoPrice = document.querySelector("input.price");
        let divErroresPrice = document.querySelector("div.divPrice ul");
        let inputPrice = document.querySelector("input.price");
        let errorsPrice = [];
        let validationPrice = false;
    
        if(campoPrice.value == ""){
            errorsPrice.push("El campo no debe estar vacío");
            divErroresPrice.innerHTML =
            "<li class='li-validation'>" + errorsPrice + "</li>";
            inputPrice.classList.add("validationIncorrecto");
            inputPrice.classList.remove("validationCorrecto");
            
        } else {
            divErroresPrice.innerHTML = "<li></li>";
            inputPrice.classList.remove("validationIncorrecto");
            inputPrice.classList.add("validationCorrecto");
            validationPrice = true;
        }

        if (validationNombre == true && validationDescripcion == true && validationImagenProducto == true && validationCategoria == true && validationMarca == true && validationStatus == true && validationfamilies == true && validationWarranty == true && validationModel == true && validationPrice == true) {
            formulario.submit();
        }
    });
    });

// window.addEventListener("load", function(){

//     let formulario = document.querySelector("#formCreate");
//     let errores = []
//     formulario.addEventListener("submit", function(e){
//         e.preventDefault();


   
//     let campoNombre = document.querySelector("input.name");
    
//     if(campoNombre.value == ""){
//         errores.push({name:"Debe ingresar el Nombre del Producto"});
//     } else if(campoNombre.value.length < 5 ){
//         errores.push({name:"El campo debe contener al menos 5 caracteres"});
//     }

//     let campoDescripcion = document.querySelector("textarea.descripcion");
    
//     if(campoDescripcion.value == ""){
//         errores.push({descripcion:"Debe ingresar la Descripción del Producto"});
//     } else if(campoDescripcion.value.length < 5 ){
//         errores.push({descripcion:"La Descripción debe contener al menos 20 caracteres"});
//     }

//     let campoimagen = document.querySelector("input.imagen-producto");
    
//      if(campoimagen.value == ""){
//     errores.push("Debe agregar una imagen con extensión : .jpg, .jpeg, .gif, .png");
//      }

//     let campoCategoria = document.querySelector("select.categoria");
    
//     if(campoCategoria.value == ""){
//         errores.push("El campo no debe estar vacío");
//     } 

//     let campoMarca = document.querySelector("select.marca");
    
//     if(campoMarca.value == ""){
//         errores.push("El campo no debe estar vacío");
//     }
    
//     let campoStatus = document.querySelector("select.status");
    
//     if(campoStatus.value == ""){
//             errores.push("El campo no debe estar vacío");
//     } 

//     let campoFamilia = document.querySelector("select.families");
    
//     if(campoFamilia.value == ""){
//         errores.push("El campo no debe estar vacío");
//     }
//     let campoWarranty = document.querySelector("input.warranty");
    
//     if(campoWarranty.value == ""){
//         errores.push("El campo no debe estar vacío");
//     } 
//     let campoModel = document.querySelector("input.model");
    
//     if(campoModel.value == ""){
//         errores.push("El campo no debe estar vacío");
//     } 
//     let campoPrice = document.querySelector("input.price");
    
//     if(campoPrice.value == ""){
//         errores.push("El campo no debe estar vacío");
//     } 
//     let ulErrores = document.querySelector("div.errores ul");
//     let errorNombre= document.querySelector("#error-nombre");

//     for (let i=0; i < errores.length; i++ ){
//     errorNombre.innerHTML="<li>" + errores[0].name + "</li>"

//         ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
//     }

//     if(errores.length > 0){

//      } else{
//       formulario.submit()

//     } 
    
// });
// })