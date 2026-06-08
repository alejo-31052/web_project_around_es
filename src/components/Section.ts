type RendererFunction<T> = (item:T) => void;

export class Section<T> {

    private items: T[];
    private cardContainer: string
    private renderer: RendererFunction<T>;

    constructor({items, renderer}: {items: T[], renderer: RendererFunction<T> }, cardContainer: string){
        this.items=items;
        this.renderer= renderer;
        this.cardContainer=cardContainer;
    }

    public renderItems(){
        this.items.forEach((item)=>{
            this.renderer(item);
        })
        
    }

    public addItem(element: HTMLElement){
        const cardContainer = document.querySelector(this.cardContainer) as HTMLDivElement;
        cardContainer.append(element);
    }
}