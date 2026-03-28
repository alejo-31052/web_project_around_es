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


// Elementos extraidos del DOM
let openEditorButton= document.querySelector('.profile__edit-button');
let formElement= document.getElementById('edit-popup');
let closeEditorButton =formElement.querySelector('.popup__close');
let profileTitle = document.querySelector('.profile__title');
let profileDescription = document.querySelector('.profile__description');
let nameInput = document.querySelector('.popup__input_type_name');
let descriptionInput = document.querySelector('.popup__input_type_description');
const cardsTemplate = document.querySelector('#cards__template').content.querySelector('.card');
const submitNewCardButton = document.querySelector('.profile__add-button')
const submitNewCardForm = document.querySelector('#new-card-popup')
const closeNewCardFormButton = submitNewCardForm.querySelector('.popup__close');
const imagePopupContainer = document.querySelector('#image-popup');


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


//Acciones de los botones para editar informacion de perfil
openEditorButton.addEventListener('click', ()=>{
    handleOpenEditModal();
    
})
closeEditorButton.addEventListener('click', ()=>{
    closeModal(formElement);
})

formElement.addEventListener('submit', handleProfileFormSubmit)


// acciones del formulario para crear una nueva tarjeta
submitNewCardButton.addEventListener('click', ()=>{
    openModal(submitNewCardForm);
})
closeNewCardFormButton.addEventListener('click', ()=>{
    closeModal(submitNewCardForm)
})

const handleCardFormSubmit=(evt)=>{
    evt.preventDefault();
    let cardName = submitNewCardForm.querySelector('.popup__input_type_card-name').value;
    let cardImageLink = submitNewCardForm.querySelector('.popup__input_type_url').value;

    console.log(cardImageLink)

    renderCard(cardName, cardImageLink);
    closeModal(submitNewCardForm);
}

submitNewCardForm.addEventListener('submit', handleCardFormSubmit);



//creacion de tarjetas dinamicamente

const getCardElement = (name= 'Sin titulo', link = './images/placeholder.jpg' )=>{

const cardElement = cardsTemplate.cloneNode(true);

const cardTitle = cardElement.querySelector('.card__title');
cardTitle.textContent=name;

const cardImage = cardElement.querySelector('.card__image');
cardImage.setAttribute('src', link);
cardImage.setAttribute('alt', name)


//funcion like
const cardLikeButton = cardElement.querySelector('.card__like-button');

cardLikeButton.addEventListener('click', function(){
    cardLikeButton.classList.toggle('card__like-button_is-active')
})


//funcion de borrar tarjeta
const deleteCardButton = cardElement.querySelector('.card__delete-button')
deleteCardButton.addEventListener('click', ()=>{
    cardElement.remove();
})

//funcion de agrandar la imagen
const imagePopup = imagePopupContainer.querySelector('.popup__image');
const imagePopupCaption =  imagePopupContainer.querySelector('.popup__caption');
const closeImagePopup= imagePopupContainer.querySelector('.popup__close'); 

cardImage.addEventListener('click', ()=>{
    imagePopup.setAttribute('src', link);
    imagePopup.setAttribute('alt', name);
    imagePopupCaption.textContent=name;
    openModal(imagePopupContainer);
})

closeImagePopup.addEventListener('click', ()=>{
    closeModal(imagePopupContainer);
})

return cardElement;
}

let renderCard = (name, link) =>{
const newCard= getCardElement(name, link);
let cardsContainer = document.querySelector('.cards__list')
cardsContainer.prepend(newCard);

}

initialCards.forEach((card)=>{
    renderCard(card.name, card.link)
})

//funcion para obtener la informacion de la nueva tarjeta
