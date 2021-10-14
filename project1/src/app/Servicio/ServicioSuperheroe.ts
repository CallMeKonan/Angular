import { SuperHero } from "../superhero-component/SuperHero";

export class ServicioSuperheroes{
    
    public heroes:SuperHero[];

    constructor(){
        this.heroes=[
          new SuperHero("Jason Todd", "Red Hood", 19),
          new SuperHero("Bruce Wayne", "Batman", 48),
          new SuperHero("Ted Kord", "Blue Beetle", 25),
          new SuperHero("Rachel Roth", "Raven", 21),
          new SuperHero("Kory Anders", "Starfire", 36)
        ]; 
    }

    devuelveHeroes() : SuperHero[] {
        return this.heroes;
    }

    borrarHeroe(heroe:SuperHero) {
        for(let i=0;i<this.heroes.length;i++){
            if(this.heroes[i]==heroe)
                this.heroes.splice(i);
        }
    }
}