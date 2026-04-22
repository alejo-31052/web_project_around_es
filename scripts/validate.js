const profileEditorButton= document.querySelector('.profile__edit-button');
const submitNewCardButton = document.querySelector('.profile__add-button')

//Variable y funcion para detectar cual es el formulario a validar
let currentForm;
let detectForm = (x) => {
    return currentForm = x
}

//eventos para detectar cual formulario el usuario le dio click
profileEditorButton.addEventListener('click', ()=>{
    let formElement= document.getElementById('edit-popup');
    detectForm(formElement)
})
submitNewCardButton.addEventListener('click', ()=>{
    let formElement = document.getElementById('new-card-popup') 
    detectForm(formElement)
})


//funcion de validacion de campos de formulario
    let setEventListeners = () => {
        const formInputs = currentForm.querySelectorAll(".popup__input");
        let inputsArray = Array.from(formInputs);

    inputsArray.forEach((x) => {
        let formErrorMessage = currentForm.querySelector(`.input-type-${x.name}__error`); 
        const submitButton = x.parentElement.querySelector('.popup__button')

        x.addEventListener("input", (event) => {
            let isInvalid = () =>{
        return inputsArray.some(input=> !input.validity.valid
            )
        }
        if (isInvalid()) {
            submitButton.disabled=true;
            formErrorMessage.textContent = x.validationMessage;
            
        } else {
            submitButton.disabled = false;
            formErrorMessage.textContent = '';
            
        }

        });
    });
    };


export {setEventListeners, currentForm};


