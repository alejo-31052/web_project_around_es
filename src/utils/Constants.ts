
//Array de las tarjetas que se imprimiran en el DOM

import type {InitialCardsType} from '../types/Types.js'

export let initialCards: InitialCardsType[]=[{
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


export const defaultFormConfig ={ 
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__button',
    inactiveButtonClass: 'popup__button_disabled',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_visible'
}

export const cardTemplate = document.querySelector('.cards__template') as HTMLTemplateElement;
export const imagePopupContainer = document.querySelector('#image-popup') as HTMLElement;


//FORMS VARIABLES
export const editFormElement = document.querySelector('#edit-profile-form') as HTMLFormElement;
export const formPopupDiv = document.querySelector('#edit-popup') as HTMLFormElement;
export const editButton = document.querySelector('.profile__edit-button') as HTMLButtonElement;
export const newCardPopup = document.querySelector('#new-card-popup') as HTMLElement;
export const newCardForm = document.querySelector('#new-card-form') as HTMLFormElement;
export const newCardButton = document.querySelector('.profile__add-button') as HTMLButtonElement;


// variables para actualizar el nombre del usuario 
export const userNameTitle = document.querySelector('.profile__title') as HTMLElement;
export const userProfessionTitle = document.querySelector('.profile__description') as HTMLElement;