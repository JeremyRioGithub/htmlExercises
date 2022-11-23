import { Personnage } from "./Personnage.js";
import { Spell } from "./Spell.js";

class Ninja extends Personnage {
    constructor(id, name) {
        super(id, name);
        this.hp = 100;
        this.strength = 20;
        this.stamina = 100;
        this.attaques = [new Spell("Coup de katana", 16, 10, () => console.log("Je vais te découper !")),
        new Spell("Kick sauté", 5, 5, () => console.log("Prends ça dans ta face !")),
        new Spell("Lancer de shuriken", 40, 20, () => console.log("Shuuuuriken !"))];
    }
}

export { Ninja };