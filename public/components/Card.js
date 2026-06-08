export class Card {
    name;
    link;
    cardTemplate;
    handleCardClick;
    element;
    constructor({ name, link }, cardTemplate, handleCardClick) {
        this.name = name;
        this.link = link;
        this.cardTemplate = cardTemplate;
        this.handleCardClick = handleCardClick;
    }
    cardCreation() {
        const card = this.cardTemplate.content.querySelector('.card')?.cloneNode(true);
        const cardName = card.querySelector('.card__title');
        const cardImage = card.querySelector('.card__image');
        cardName.textContent = this.name;
        cardImage.alt = this.name;
        cardImage.src = this.link;
        this.element = card;
        this.PoPupImage();
        this.likeButtonStatus();
        this.deleteCard();
        return card;
    }
    PoPupImage() {
        const imageElement = this.element.querySelector('.card__image');
        imageElement.addEventListener('click', this.handleCardClick);
    }
    likeButtonStatus() {
        const cardLikeButton = this.element.querySelector('.card__like-button');
        cardLikeButton.addEventListener('click', () => {
            cardLikeButton.classList.toggle('card__like-button_is-active');
        });
    }
    deleteCard() {
        const deleteButton = this.element.querySelector('.card__delete-button');
        deleteButton.addEventListener('click', () => {
            this.element.remove();
        });
    }
}
