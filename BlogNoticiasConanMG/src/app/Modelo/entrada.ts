export class Entrada {

    private static contadorEntrada:number=1;
    private _id:number;
    private _titulo:string;
    private _contenido:String;
    private _fechaPubl:String;
  
    constructor(titulo:string, contenido:String, fechaPubl:String){
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
    
    set contenido(contenido:String){
        this._contenido=contenido;
    }

    get fechaPubl(){
        return this._fechaPubl;
    }

    set fechaPubl(fechaPubl:String){
        this._fechaPubl=fechaPubl;
    }

}
