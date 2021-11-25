export class Entrada {

    private static contadorEntrada:number=1;
    private _id:number;
    private _titulo:string;
    private _contenido:string;
    private _fechaPubl:string;
  
    constructor(titulo:string, contenido:string, fechaPubl:string){
        this._id=Entrada.contadorEntrada;
        this._titulo=titulo;
        this._contenido=contenido;
        this._fechaPubl=fechaPubl;
        Entrada.contadorEntrada++;
    }

    get id(){
        return this._id;
    }

    get titulo(){
        return this._titulo;
    }

    set titulo(titulo:string){
        this._titulo=titulo;
    }

    get contenido(){
        return this._contenido;
    }
    
    set contenido(contenido:string){
        this._contenido=contenido;
    }

    get fechaPubl(){
        return this._fechaPubl;
    }

    set fechaPubl(fechaPubl:string){
        this._fechaPubl=fechaPubl;
    }

}
