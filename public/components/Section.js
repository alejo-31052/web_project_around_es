export class Section {
    items;
    cardContainer;
    renderer;
    constructor({ items, renderer }, cardContainer) {
        this.items = items;
        this.renderer = renderer;
        this.cardContainer = cardContainer;
    }
    renderItems() {
        this.items.forEach((item) => {
            this.renderer(item);
        });
    }
    addItem(element) {
        const cardContainer = document.querySelector(this.cardContainer);
        cardContainer.append(element);
    }
}
