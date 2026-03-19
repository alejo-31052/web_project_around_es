let initialCards=[{
    name:'Valle de Yosemite',
    link:'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg'
}, {
    name:'Lago Louise',
    link:'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg'
}, {
    name:'Montañas Calvas',
    link:'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_bald-mountains.jpg'
}, {
    name:'Latemar',
    link:'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_latemar.jpg'
}, {
    name:'Parque Nacional de la Vanoise',
    link:'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_vanoise.jpg'
}, {
    name:'Lago di Braies',
    link:'https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lago.jpg'
}];

initialCards.forEach(function(card){
console.log(card.name);
})

// Elementos extraidos del DOM
let openEditorButton= document.querySelector('.profile__edit-button');
let formElement= document.getElementById('edit-popup');
let closeEditorButton =document.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_type_name');
let descriptionInput = document.querySelector('.popup__input_type_description');


//funciones de abrir o cerrar la pagina

let openModal = (modal)=>{
modal.classList.add('popup_is-opened')
}
let closeModal = (modal) =>{
    modal.classList.remove('popup_is-opened');
}


//campos de los formularios
let fillProfileForm=()=>{
    nameInput.value=profileTitle.textContent;
    descriptionInput.value=profileDescription.textContent;
}

let handleOpenEditModal =() =>{
    openModal(formElement);
    fillProfileForm()
} 
let handleProfileFormSubmit =(evt)=>{
    profileTitle.textContent=nameInput.value;
    profileDescription.textContent=descriptionInput.value;
    closeModal(formElement);
    evt.preventDefault();

}


//Acciones de los botones
openEditorButton.addEventListener('click', ()=>{
    handleOpenEditModal();
    
})

closeEditorButton.addEventListener('click', ()=>{
    closeModal(formElement);
})


//Edicion de campos
formElement.addEventListener('submit', handleProfileFormSubmit)