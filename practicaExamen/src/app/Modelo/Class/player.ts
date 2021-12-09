export class Player {

    private static numAnterior:number=0;
    private _id:number;
    private _name:string;
    private _age:number;
    
    constructor(name:string, age:number){
        Player.numAnterior++;
        this._id=Player.numAnterior;
        this._name=name;
        this._age=age;
    }

    get id(){
        return this._id
    }

    get name(){
        return this._name
    }

    set name(name:string){
        this._name=name
    }

    get age(){
        return this._age
    }

    set age(age:number){
        this._age=age
    }

}
