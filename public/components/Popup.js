export class Popup {
    popupSelector;
    constructor(popupSelector) {
        this.popupSelector = popupSelector;
    }
    handleEscClose = (event) => {
        const popupContainer = document.querySelector(this.popupSelector);
        if (event.key === 'Escape') {
            this.close(popupContainer);
        }
    };
    setEventListeners() {
        const popupContainer = document.querySelector(this.popupSelector);
        const closeButton = popupContainer.querySelector('.popup__close');
        closeButton.addEventListener('click', () => {
            this.close(popupContainer);
        });
        document.addEventListener('keydown', this.handleEscClose);
        popupContainer.addEventListener('click', (event) => {
            if (event.target === popupContainer) {
                this.close(popupContainer);
            }
        });
    }
    open(modal) {
        modal.classList.add('popup_is-opened');
    }
    close(modal) {
        modal.classList.remove('popup_is-opened');
    }
}
