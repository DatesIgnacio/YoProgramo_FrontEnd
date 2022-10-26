import { ThisReceiver } from "@angular/compiler";

export class ExpLaboral {
    id? : number;
    nombreExpLaboral : string;
    descripcionExpLaboral : string;
    
    constructor(nombreExpLaboral: string, descripcionExpLaboral: string){
        this.nombreExpLaboral = nombreExpLaboral;
        this.descripcionExpLaboral = descripcionExpLaboral;
    }
}
