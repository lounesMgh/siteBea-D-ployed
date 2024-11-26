export interface Footer {
    id?: string;
    icon?: string;
    title?: string;
    url?:string;
    img?:string;
    idNav?:string;
    sousMenu?:Array<Footer>;
}