let closePopup = (currentPopup, closeFunction) => {
    
    //evento para detectar cuando el usuario le da click por fuera del form
    currentPopup.addEventListener('click', (event)=>{
        if(event.target===currentPopup){
            closeFunction(currentPopup)
        }
    })
    //evento que escucha la tecla que esta siendo presionada en el documento para salir si es Escape.
    document.addEventListener('keydown', (event)=>{
        if(event.key==='Escape'){
            closeFunction(currentPopup)
        }
    })
}

export {closePopup};





