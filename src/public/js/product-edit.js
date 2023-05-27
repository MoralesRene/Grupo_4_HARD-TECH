const formulario = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresiones = {
	name: /^[a-zA-ZÀ-ÿ\s]{5,40}$/, // Letras y espacios, pueden llevar acentos.
	descripcion: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	}

const validarFormulario = (e) => {
    switch (e.target.name) {
        case "name":
            if(expresiones.name.test(e.target.value)){
                document.getElementById("form__group-input").classList.remove("form__grupo-incorrecto");
                document.getElementById("form__group-input").classList.add("form__grupo-correcto");
                document.querySelector("#form__group-input i").classList.add("fa_check_circle");
                document.querySelector("#form__group-input i").classList.remove("fa_times_circle");
                document.querySelector("#form__group-input .form__group-error").classList.remove("form__group-error-activo");
 } else {
                document.getElementById("form__group-input").classList.add("form__group-incorrecto");
                document.getElementById("form__group-input").classList.remove("form__group-correcto");
                document.querySelector("#form__group-input i").classList.add("fa_times_circle");
                document.querySelector("#form__group-input i").classList.remove("fa_check_circle");
                document.querySelector("#form__group-input .form__group-error").classList.add("form__group-error-activo");
                 }
               case "descripcion":  
               if(expresiones.descripcion.test(e.target.value)){
                document.getElementById("form__group-input").classList.remove("form__group-incorrecto");
                document.getElementById("form__group-input").classList.add("form__group-correcto");
                document.querySelector("#form__group-input i").classList.add("fa_check_circle");
                document.querySelector("#form__group-input i").classList.remove("fa_times_circle");
                document.querySelector("#form__group-input .form__group-error").classList.remove("form__group-error-activo");
 } else {
                document.getElementById("form__group-input").classList.add("form__group-incorrecto");
                document.getElementById("form__group-input").classList.remove("form__group-correcto");
                document.querySelector("#form__group-input i").classList.add("fa_times_circle");
                document.querySelector("#form__group-input i").classList.remove("fa_check_circle");
                document.querySelector("#form__group-input .form__group-error").classList.add("form__group-error-activo");
                 }
    }
};

const campos = {
	name: false,
	descripcion: false,
	};

inputs.forEach((input) => {
	input.addEventListener('keyup', validarFormulario);
	input.addEventListener('blur', validarFormulario);
});

formulario.addEventListener('submit', (e) => {
	e.preventDefault();

	if(campos.name && campos.descripcion ){
		formulario.reset();

		document.getElementById('form__mensaje-exito').classList.add('form__mensaje-exito-activo');
		setTimeout(() => {
			document.getElementById('form__mensaje-exito').classList.remove('form__mensaje-exito-activo');
		}, 5000);

		document.querySelectorAll('.form__group-correcto').forEach((icono) => {
			icono.classList.remove('form__group-correcto');
		});
	} else {
		document.getElementById('form__mensaje').classList.add('form__mensaje-activo');
	}
});