class Personnage {
    attaques = [];
    constructor(id, name) {
        this.id = id;
        this.name = name;
        this.hp = 100;
        this.strength = 10;
        this.endurance = 25;
        this.opponent = null;
        this.attaques = null;
    }

    subirDommage(montant_dommage) {
        this.hp -= montant_dommage;
    }

    attaquer(target) {
        const degats = this.strength;
        target.subirDommage(degats);
        this.endurance -= 2;
        let choixAttaque = this.jouerTour(Math.floor(Math.random() * this.attaques.length));
        this.castSpell(choixAttaque,this,target);
    }

    jouerTour(choix) {
        console.log(this.attaques[choix]);
        return this.attaques[choix]
    }

    annonce() {
        let perso = document.getElementById(`personnage-p${this.id}`);
        let p = document.createElement('p');
        p.innerText = `Je m'appelle ${this.name}, mes stats sont :
             ๐งก hp : ${this.hp}
             ๐ท strength : ${this.strength}
             ๐ด endurance: ${this.endurance}`;
        p.className = `paragraphe-p${this.id}`;
        perso.prepend(p);
       setTimeout(() => {
            p.remove(`personnage-p${this.id}`);
        }, 5000);
    }

    pv() {
        let perso = document.getElementById(`personnage-p${this.id}`);
        let p = document.createElement('p');
        p.innerText = `Aie il me reste :
             ๐งก hp : ${this.hp}
             ๐ท strength : ${this.strength}
             ๐ด endurance: ${this.endurance}`;
        p.className = `paragraphe-p${this.id}`;
        perso.prepend(p);
        setTimeout(() => {
            p.remove(`personnage-p${this.id}`);
        }, 5000);
    }

    get getHp() {
        return this.hp;
    }

    get getEndurance() {
        return this.endurance;
    }
    castSpell(spell, caster, target){
        spell.cast(caster,target)
    }

    // set setHp(id) {
    //     this.changeValueWithId(id, this.hp);
    // }

    // set setEndurance(id) {
    //     this.changeValueWithId(id, this.endurance);
    // }

    // changeValueWithId(id, value) {
    //     document.getElementById(id).value = value;
    // }
}

export {Personnage};