export class Popup {
    protected popupSelector: string;

    constructor(popupSelector: string){
        this.popupSelector=popupSelector;
    }

    private handleEscClose=(event: KeyboardEvent)=>{
        const popupContainer = document.querySelector(this.popupSelector) as HTMLDivElement;
        if(event.key==='Escape'){
            this.close(popupContainer);
        }
    }
    public setEventListeners(){

        
        const popupContainer = document.querySelector(this.popupSelector) as HTMLDivElement;
        const closeButton = popupContainer.querySelector('.popup__close') as HTMLButtonElement;

        closeButton.addEventListener('click', ()=>{
            this.close(popupContainer);

        })
        document.addEventListener('keydown', this.handleEscClose);

       popupContainer.addEventListener('click', (event) => {
    if (event.target === popupContainer) {
        this.close(popupContainer);
    }
});
    }
    public open(modal: HTMLElement): void{
        modal.classList.add('popup_is-opened')
    }
    public close(modal: HTMLElement): void{
    modal.classList.remove('popup_is-opened')
    }
}   