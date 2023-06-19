window.addEventListener("load", function(){

    let formulario = document.querySelector("#formCreate");
    let errores = []
    formulario.addEventListener("submit", function(e){
        e.preventDefault();


   
    let campoNombre = document.querySelector("input.name");
    
    if(campoNombre.value == ""){
        errores.push({name:"Debe ingresar el Nombre del Producto"});
    } else if(campoNombre.value.length < 5 ){
        errores.push({name:"El campo debe contener al menos 5 caracteres"});
    }

    let campoDescripcion = document.querySelector("textarea.descripcion");
    
    if(campoDescripcion.value == ""){
        errores.push({descripcion:"Debe ingresar la Descripción del Producto"});
    } else if(campoDescripcion.value.length < 5 ){
        errores.push({descripcion:"La Descripción debe contener al menos 20 caracteres"});
    }

    let campoimagen = document.querySelector("input.imagen-producto");
    
     if(campoimagen.value == ""){
    errores.push("Debe agregar una imagen con extensión : .jpg, .jpeg, .gif, .png");
     }

    let campoCategoria = document.querySelector("select.categoria");
    
    if(campoCategoria.value == ""){
        errores.push("El campo no debe estar vacío");
    } 

    let campoMarca = document.querySelector("select.marca");
    
    if(campoMarca.value == ""){
        errores.push("El campo no debe estar vacío");
    }
    
    let campoStatus = document.querySelector("select.status");
    
    if(campoStatus.value == ""){
            errores.push("El campo no debe estar vacío");
    } 

    let campoFamilia = document.querySelector("select.families");
    
    if(campoFamilia.value == ""){
        errores.push("El campo no debe estar vacío");
    }
    let campoWarranty = document.querySelector("input.warranty");
    
    if(campoWarranty.value == ""){
        errores.push("El campo no debe estar vacío");
    } 
    let campoModel = document.querySelector("input.model");
    
    if(campoModel.value == ""){
        errores.push("El campo no debe estar vacío");
    } 
    let campoPrice = document.querySelector("input.price");
    
    if(campoPrice.value == ""){
        errores.push("El campo no debe estar vacío");
    } 
    let ulErrores = document.querySelector("div.errores ul");
    let errorNombre= document.querySelector("#error-nombre");

    for (let i=0; i < errores.length; i++ ){
    errorNombre.innerHTML="<li>" + errores[0].name + "</li>"

        ulErrores.innerHTML += "<li>" + errores[i] + "</li>"
    }

    if(errores.length > 0){

     } else{
      formulario.submit()

    } 
    
});
})