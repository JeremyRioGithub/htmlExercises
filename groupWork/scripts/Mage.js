import {Personnage} from "./Personnage.js";
import {Spell} from "./Spell.js";

class Mage extends Personnage{
    constructor(id, name) {
        super(id, name);
        this.hp = 100;
        this.strength = 40;
        this.stamina = 20;
        this.attaques.push(
            (new Spell("Boule de feu", 30, 10, ()=> console.log("Katon, boule de feu !"))),
            (new Spell("Enchantement", 15, 5, ()=> console.log("Je chante sous la pluie..."))),
            (new Spell("Coup de bâton", 5, 0, ()=> console.log("Tu vas tâter de la puissance de mon bâton !")))
        );
    }
}

export {Mage};