import {Personnage, Spell} from './Personnage.js';

class Mage extends Personnage {
    constructor(id, name) {
        super(id, name)
        this.hp = 100;
        this.strength = 10;
        this.endurance = 25;
        this.opponent = null;
        this.attaques = [];
    }

    subirDommage(montant_dommage) {
        this.hp -= montant_dommage;
    }

    attaquer(target) {
        const degats = this.strength;
        target.subirDommage(degats);
        this.endurance -= 2;
    }

    jouerTour(choix) {
        console.log(this.attaques[choix]);
    }

    annonce() {
        let perso = document.getElementById(`personnage-p${this.id}`);
        let p = document.createElement('p');
        p.textContent = `Je m'appelle ${this.name}, mes stats sont :
             🧡 hp : ${this.hp}
             🔷 strength : ${this.strength}
             🔴 endurance: ${this.endurance}`;
        p.className = `paragraphe-p${this.id}`;
        perso.prepend(p);
        setTimeout(() => {
            p.remove(`personnage-p${this.id}`);
        }, 5000)
    }

    get getHp() {
        return this.hp;
    }

    get getEndurance() {
        return this.endurance;
    }

    set setHp([id, newHp]) {
        this.hp = newHp;
        this.changeValueWithId(id, newHp);
    }

    set setEndurance([id, endurance]) {
        this.endurance = endurance;
        this.changeValueWithId(id, endurance);
    }

    changeValueWithId(id, value) {
        document.getElementById(id).innerHTML = value;
    }
}

class Spell{
    constructor(nom, damage, staminacost, castcallback) {
        this.nom = nom;
        this.damage = damage;
        this.staminacost = staminacost;
        this.castcallback = castcallback;
    }

    cast(caster, target) {
        if (caster.endurance < this.staminacost){
            console.log("Tu n'as pas de mana");
        } else {
            caster.endurance -= this.staminacost;
            target.hp -= this.damage;
            this.castcallback();
        }
    }
}
export {Personnage};
// class Vampire extends Personnage{
//     constructor(id, name){
//         super(id, name)
//     }
//     subirDommage(montant_dommage) {
//         super.subirDommage(montant_dommage)
//     }

//     attaquer(target) {
//         super.attaquer(target)
//     }

//     jouerTour(choix) {
//         super.jouerTour(choix)
//     }

//     annonce() {
//         super.annonce()
//     }

//     get getHp() {
//         return this.hp;
//     }

//     get getEndurance() {
//         return this.endurance;
//     }

//     set setHp([id, newHp]) {
//         this.hp = newHp;
//         this.changeValueWithId(id, newHp);
//     }

//     set setEndurance([id, endurance]) {
//         this.endurance = endurance;
//         this.changeValueWithId(id, endurance);
//     }

//     changeValueWithId(id, value) {
//         super.changeValueWithId(id, value)
//     }
// }