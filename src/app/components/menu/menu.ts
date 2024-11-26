export interface Menu{
    id?:string;
    icon?:string;
    titleNormal?:string;
    titleNext?:string;
    url?:string;
    sousMenu?:Array<Menu>;
    alignRight?:boolean;
}