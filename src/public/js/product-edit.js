window.addEventListener("load", function () {
    let formulario = document.querySelector("#form");


    formulario.addEventListener("submit", function (e) {
        e.preventDefault();

        let campoNombre = document.querySelector("input.name");
        let divErroresNombre = document.querySelector("div.divNombre ul");
        let inputName = document.getElementById("name");
        let errorsNombre = [];
        console.log(inputName);
        let validationNombre = false;

        if (campoNombre.value == "") {
            errorsNombre.push("Debe ingresar el Nombre del Producto");
            divErroresNombre.innerHTML =
                "<li class='li-validation'>" + errorsNombre + "</li>";
            inputName.classList.add("validationIncorrecto");
            inputName.classList.remove("validationCorrecto");

        } else if (campoNombre.value.length < 5) {
            errorsNombre.push("El campo debe contener al menos 5 caracteres");
            divErroresNombre.innerHTML =
                "<li class='li-validation'>" + errorsNombre + "</li>";
            inputName.classList.add("validationIncorrecto");
            inputName.classList.remove("validationCorrecto");

        } else {
            divErroresNombre.innerHTML = "<li></li>";
            inputName.classList.remove("validationIncorrecto");
            inputName.classList.add("validationCorrecto");
            validationNombre = true;
        }

        let campoDescripcion = document.getElementById("descripcion");
        console.log(campoDescripcion);
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

        } else if (campoDescripcion.value.length < 20) {
            errorsDescripcion.push("La Descripción debe contener al menos 20 caracteres");
            divErroresDescripcion.innerHTML =
                "<li class='li-validation'>" + errorsDescripcion + "</li>";
            inputDescripcion.classList.add("validationIncorrecto");
            inputDescripcion.classList.remove("validationCorrecto");

        } else {
            divErroresDescripcion.innerHTML = "<li></li>";
            inputDescripcion.classList.remove("validationIncorrecto");
            inputDescripcion.classList.add("validationCorrecto");
            validationDescripcion = true;
        }

        // let campoImagenProducto = document.getElementById("imagen-producto");
        // let divErroresImagenProducto = document.querySelector("div.divImagenProducto ul");
        // let errorsImagenProducto = [];
        // let validationImagenProducto = false;

        // if (campoImagenProducto.value == "") {
        //     errorsImagenProducto.push("Debe agregar una imagen con extensión : .jpg, .jpeg, .gif, .png");
        //     divErroresImagenProducto.innerHTML =
        //         "<li class='li-validation'>" + errorsImagenProducto + "</li>";
        // } else {
        //     divErroresImagenProducto.innerHTML = "<li></li>";
        //     validationImagenProducto = true;

        // }

        let campoCategoria = document.getElementById("categoria");
        let divErroresCategoria = document.querySelector("div.divCategoria ul");
        let selectCategoria = document.getElementById("categoria");
        let errorsCategoria = [];
        let validationCategoria = false;

        if (campoCategoria.value == "") {
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

        if (campoMarca.value == "") {
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

        if (campoStatus.value == "") {
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

        if (campoFamiles.value == "") {
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

        if (campoWarranty.value == "") {
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

        let campoModel = document.getElementById("model");
        let divErroresModel = document.querySelector("div.divModel ul");
        let inputModel = document.getElementById("model");
        let errorsModel = [];
        let validationModel = false;

        if (campoModel.value == "") {
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

        let campoPrice = document.getElementById("price");
        let divErroresPrice = document.querySelector("div.divPrice ul");
        let inputPrice = document.getElementById("price");
        let errorsPrice = [];
        let validationPrice = false;

        if (campoPrice.value == "") {
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

        if (validationNombre == true && validationDescripcion == true && validationCategoria == true && validationMarca == true && validationStatus == true && validationfamilies == true && validationWarranty == true && validationModel == true && validationPrice == true) {
            formulario.submit();
        }
    });
});



// const formulario = document.getElementById('form');
// const inputs = document.querySelectorAll('#form input');

// const expresiones = {
//     name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
//     descripcion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
// }

// const validarFormulario = (e) => {
//     //switch (e.target.name) {
//     //  case "name":
//     //    if(expresiones.name.test(e.target.value)){
//     //   document.getElementById("form__group-input").classList.remove("form__grupo-incorrecto");
//     // document.getElementById("form__group-input").classList.add("form__grupo-correcto");
//     //      document.querySelector("#form__group-input i").classList.add("fa_check_circle");
//     //    document.querySelector("#form__group-input i").classList.remove("fa_times_circle");
//     //  document.querySelector("#form__group-input .form__group-error").classList.remove("form__group-error-activo");
//     //} else {
//     //             document.getElementById("form__group-input").classList.add("form__group-incorrecto");
//     //           document.getElementById("form__group-input").classList.remove("form__group-correcto");
//     //         document.querySelector("#form__group-input i").classList.add("fa_times_circle");
//     //       document.querySelector("#form__group-input i").classList.remove("fa_check_circle");
//     //     document.querySelector("#form__group-input .form__group-error").classList.add("form__group-error-activo");
//     //    }
//     //case "descripcion":
//     //if(expresiones.descripcion.test(e.target.value)){
//     // document.getElementById("form__group-input").classList.remove("form__group-incorrecto");
//     // document.getElementById("form__group-input").classList.add("form__group-correcto");
//     // document.querySelector("#form__group-input i").classList.add("fa_check_circle");
//     //    document.querySelector("#form__group-input i").classList.remove("fa_times_circle");
//     //   document.querySelector("#form__group-input .form__group-error").classList.remove("form__group-error-activo");
//     //} else {
//     //             document.getElementById("form__group-input").classList.add("form__group-incorrecto");
//     //           document.getElementById("form__group-input").classList.remove("form__group-correcto");
//     //         document.querySelector("#form__group-input i").classList.add("fa_times_circle");
//     //       document.querySelector("#form__group-input i").classList.remove("fa_check_circle");
//     //     document.querySelector("#form__group-input .form__group-error").classList.add("form__group-error-activo");
//     //    }
//     // }
//     switch (e.target.name) {
//         case "name":
//             if (expresiones.name.test(e.target.value)) {
//                 e.target.classList.remove("form__group-incorrecto");
//                 e.target.classList.add("form__group-correcto");
//                 document.getElementById("name-icon").classList.add("fa_check_circle");
//                 document.getElementById("name-icon").classList.remove("fa_times_circle");
//                 document.getElementById("p-error-name").classList.remove("form__group-error-activo");
//             } else {
//                 e.target.classList.add("form__group-incorrecto");
//                 e.target.classList.remove("form__group-correcto");
//                 document.getElementById("name-icon").classList.add("fa_times_circle");
//                 document.getElementById("name-icon").classList.remove("fa_check_circle");
//                 document.getElementById("p-error-name").classList.add("form__group-error-activo");
//                 console.log("error")
//             }
//         case "descripcion":
//             if (expresiones.descripcion.test(e.target.value)) {
//                 e.target.classList.remove("formgroup-incorrecto");
//                 e.target.classList.add("formgroup-correcto");
//                 document.getElementById("descripcion-icon").classList.add("fa_check_circle");
//                 document.getElementById("descripcion-icon").classList.remove("fa_times_circle");
//                 document.getElementById("p-error-descripcion").classList.remove("formgroup-error-activo");
//             } else {
//                 e.target.classList.add("formgroup-incorrecto");
//                 e.target.classList.remove("formgroup-correcto");
//                 document.getElementById("descripcion-icon").classList.add("fa_times_circle");
//                 document.getElementById("descripcion-icon").classList.remove("fa_check_circle");
//                 document.getElementById("p-error-descripcion").classList.add("formgroup-error-activo");
//             }
//     }

// };

// const campos = {
//     name: false,
//     descripcion: false,
// };

// inputs.forEach((input) => {
//     input.addEventListener('keyup', validarFormulario);
//     input.addEventListener('blur', validarFormulario);
// });

// formulario.addEventListener('submit', (e) => {
//     e.preventDefault();

//     if (campos.name && campos.descripcion) {
//         formulario.reset();

//         document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
//         setTimeout(() => {
//             document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
//         }, 5000);

//         document.querySelectorAll('.form__group-correcto').forEach((icono) => {
//             icono.classList.remove('form__group-correcto');
//         });
//     } else {
//         document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
//     }
// });