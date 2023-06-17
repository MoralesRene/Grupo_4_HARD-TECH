window.addEventListener("load",()=>{
    const labelFileInput = document.getElementById("labelBtn")
    //imput file
    
    const inputFiles = document.getElementById("images")
    labelFileInput.addEventListener("click",()=>{
        inputFiles.click()
    })
    const previewImage = document.getElementById("previewImage")
    //contenedor de imagenes
    const previewContain = document.getElementById("preview") 
    inputFiles.addEventListener("change",(e)=>{
                if (inputFiles.files.length==0) {
                    previewContain.style.width="200px"
                    previewContain.style.height="100px"
                    previewContain.style.margin="auto"
                    previewContain.style.display="flex"
                    previewContain.style.alignItems="center"
                    previewContain.style.justifyContent="center"
                    previewContain.style.fontWeight="700"
                    previewContain.innerHTML ="Seleccione imagenes"
                }else{
                    for (let i = 0; i < inputFiles.files.length; i++) {
                        const reader = new FileReader();
                        reader.onload = (e)=>{
                            previewContain.style.width = "100%"
                            previewContain.style.height = "160px"
                            previewContain.style.display = "grid"
                            previewContain.style.gridTemplateColumns = `repeat(${inputFiles.files.length},160px)`
                            previewContain.style.gridTemplateRows = "160px"
                            previewContain.style.columnGap = "10px"
                            const li = document.createElement("li")
                            li.style.width = "160px"
                            li.style.height = "160px"
                            const img = document.createElement("img")
                            img.style.width = "160px"
                            img.style.height = "160px"
                            img.src = e.target.result
                            img.setAttribute("draggable","true")
                            img.setAttribute("key",inputFiles.files[i].name)
                            li.append(img)
                            previewContain.append(li)
                            labelFileInput.innerText ="Perfecto!"
                            labelFileInput.style.marginBottom = "10px"
                        }
                        reader.readAsDataURL(e.target.files[i])
                    }
                }

    })
})