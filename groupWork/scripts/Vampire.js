import {Personnage} from "./Personnage.js";
import {Spell} from "./Spell.js";

class Vampire extends Personnage{
    constructor(id, name) {
        super(id, name);
        this.hp = 100;
        this.strength = 1;
        this.stamina = 120;
        this.attaques.push(
            (new Spell("Morsure", 35, 15, ()=> console.log("Miam miam"))),
            (new Spell("Regard glaçant", 15, 5, ()=> console.log(".........."))),
            (new Spell("Prise de sang", 10, 2, ()=> console.log("Tu vas tâter de la puissance de mon bâton !")))
        );
    }
}

export {Vampire};