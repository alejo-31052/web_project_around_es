type CardClick = () => void;
import type {InitialCardsType} from "../types/Types.js";



export class Card { 
    private name: string;
    private link: string;
    private cardTemplate: HTMLTemplateElement;
    private handleCardClick: CardClick;
    protected element! : HTMLElement;
    
    constructor({name, link}: InitialCardsType, cardTemplate: HTMLTemplateElement, handleCardClick: CardClick){
        this.name=name;
        this.link=link;
        this.cardTemplate=cardTemplate;
        this.handleCardClick=handleCardClick;
    }

    public cardCreation(): HTMLElement{
        const card = this.cardTemplate.content.querySelector('.card')?.cloneNode(true) as HTMLElement;
        const cardName = card.querySelector('.card__title') as HTMLElement;
        const cardImage = card.querySelector('.card__image') as HTMLImageElement;

        cardName.textContent=this.name;
        cardImage.alt=this.name;
        cardImage.src=this.link
        this.element=card;

        this.PoPupImage();
        this.likeButtonStatus();
        this.deleteCard()

        return card;
    }

    private PoPupImage(): void{
        const imageElement = this.element.querySelector('.card__image') as HTMLImageElement; 
        imageElement.addEventListener('click', this.handleCardClick)
    }

    private likeButtonStatus(): void{
        const cardLikeButton = this.element.querySelector('.card__like-button') as HTMLButtonElement;
        cardLikeButton.addEventListener('click', ()=>{
            cardLikeButton.classList.toggle('card__like-button_is-active')
        })

    }
    private deleteCard(): void{
        const deleteButton = this.element.querySelector('.card__delete-button') as HTMLButtonElement;
        deleteButton.addEventListener('click', ()=>{
            this.element.remove();
        })
    }
}