window.addEventListener("load",()=>{
    const inputs = document.querySelectorAll("input[name=filtro]")
    const label = document.querySelectorAll("label.FilterBymark")
    inputs.forEach(input=>{
        input.addEventListener("change",(e)=>{
            if (e.target.checked) {
                label.forEach(data =>{
                    if (data.textContent == e.target.id) {
                        console.log(location.pathname + `/${data.textContent}`);
                    }
                })
            }else{
                console.log("Fue desmarcado el campo" )
            }
        })
    })
})