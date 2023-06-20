const expresiones = {
  password: /^.{4,12}$/, // 4 a 12 digitos.
  correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
};

window.addEventListener("load", function () {
  const formulario = document.querySelector("form.login");
  let errorId = document.getElementById("errorId");
  console.log(errorId);

  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    
    const email = document.querySelector("input.email");
    const password = document.querySelector("input.password");
    const divErroresEmail = document.getElementById("valdiationEmail");
    const divErroresPassword = document.getElementById("valdiationPassword");
    const inputEmail = document.getElementById("email");
    const inputPassword = document.getElementById("password");
    
    let errorsEmail = [];
    let errorsPassword = [];
    
    
    
    let emailPrueba = false;
    let passwordPrueba = false;
    
    if (email.value === "") {
      errorsEmail.push("El campo del email debe estar completo");
      divErroresEmail.innerHTML =
      "<li class='validation errorsEmail' >" + errorsEmail + "</li>";
      inputEmail.classList.add("validationIncorrecto");
      inputEmail.classList.remove("validationCorrecto");
    }
    else if (!expresiones.correo.test(email.value)) {
      errorsEmail.push("El campo del email debe ser válido");
      divErroresEmail.innerHTML =
      "<li class='validation errorsEmail' >" + errorsEmail + "</li>";
      inputEmail.classList.add("validationIncorrecto");
      inputEmail.classList.remove("validationCorrecto");
    }
    else {
      divErroresEmail.innerHTML = "<li></li>";
      inputEmail.classList.remove("validationIncorrecto");
      inputEmail.classList.add("validationCorrecto");
      
      emailPrueba = true;
    }
    
    if (password.value === "") {
      errorsPassword.push("El campo de la contraseña debe estar completo");
      divErroresPassword.innerHTML =
      "<li class='validation errorsPassword' >" + errorsPassword + "</li>";
      inputPassword.style.borderColor = "red";
    } else {
      divErroresPassword.innerHTML = "<li></li>";
      inputPassword.style.borderColor = "green";
      passwordPrueba = true;
    }
    
    if (emailPrueba === true && passwordPrueba === true) {
      formulario.submit();
    }
  });
});

// const formulario = document.querySelector("form.login");
// const inputs = document.querySelectorAll(".inputForm");

// let errorsEmail = [];
// let divErroresEmail = document.getElementById("valdiationEmail");

// const validarFormulario = function (e) {
//   switch (e.target.name) {
//     case "email":
//       if (expresiones.correo.test(e.target.value)) {
  //         document.getElementById("email").classList.remove("validationIncorrecto");
  //         document.getElementById("email").classList.add("validationCorrecto");

  

//       } else {
//         document.getElementById("email").classList.add("validationIncorrecto");
//         document.getElementById("email").classList.remove("validationCorrecto");
//         errorsEmail.push("El campo del email debe ser válido");
//         divErroresEmail.innerHTML = "<li class='validation errorsEmail' >" + errorsEmail + "</li>";
//         console.log('entre al else!');

//       }
//       break;
//     case "password":
//       break;

//     default:
//       break;
//   }
// };

// inputs.forEach((input) => {
//   input.addEventListener("keyup", validarFormulario);
//   input.addEventListener("blur", validarFormulario);
// });

// formulario.addEventListener("submit", (e) => {
//   e.preventDefault();
// });


















