import { Popup } from "./Popup.js";
export class PopupWithForm extends Popup {
    formElement;
    handleSubmitEvent;
    constructor(popupSelector, formElement, handleSubmitEvent) {
        super(popupSelector);
        this.formElement = formElement;
        this.handleSubmitEvent = handleSubmitEvent;
    }
    getInputValues() {
        const valueList = this.formElement.querySelectorAll('.popup__input');
        const objectValues = {};
        valueList.forEach((value) => {
            const input = value;
            objectValues[input.name] = input.value;
        });
        return objectValues;
    }
    setEventListeners() {
        const submitButton = this.formElement.querySelector('.popup__button');
        super.setEventListeners();
        submitButton?.addEventListener('click', (evt) => {
            evt.preventDefault();
            const values = this.getInputValues();
            this.handleSubmitEvent(values);
            this.close();
        });
    }
    close() {
        const popup = document.querySelector(this.popupSelector);
        const valueList = this.formElement.querySelectorAll('.popup__input');
        valueList.forEach((value) => {
            const input = value;
        });
        this.formElement.reset();
        super.close(popup);
    }
}
