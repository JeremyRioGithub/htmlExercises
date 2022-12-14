// Créer une classe Personnage qui aura les attributs:
// - hp | 100
// - strength | 10
// - endurance | 25


// ajouter à la classe personnage les attributs: 
// -opponent | null par défaut, va contenir notre adversaire
// attaques | un tableau d'attaques

// ajouter à la classe personnage:
// - un getter pour les hp
// - un getter pour l'endurance
// - un setter pour les hp
// - un setter pour l'endurance

// pro tip: si dans mes setters je change également la valeur du front grâce à l'id, c'est pratique...

// ajouter également une méthode jouertour(choix) qui va nous permettre de seléctionner via l'index une attaque dans notre tableau d'attaques 

// Créez une classe Spell faisant appel à un constructeur de classe prenant en paramètre les attributs:

// - nom | nom du sort/ de l'attaque 
// - damage | dommages du sort 
// - staminacost | coût en endurance
// - castcallback | fonction de rappel éxécutée lors de l'utilisation du sort 

// et ayant pour méthode une méthode:
// - cast(caster, target) | elle réduit l'endurance du caster d'une valeur égale à staminacost, elle fait subir des dommages à la target d'une valeur égale à damage, et éxécute la fonction de callback.
// Je comprend pas le "castcallback " , c'est une fonction qui rappelle qul sort a été lancé ?
// le castcallback va plutôt être utile pour lancer des animations si vous le souhaitez. voici un exemple :
// new Spell("série de coups", 40, 10, () => {console.log("*** ORAORAORAORAORAORA ***"));

class Personnage {
    constructor(id, nom, attaques){
        this.id=id
        this.nom = nom;
        this.hp = 100;
        this.strength = 10;
        this.endurance = 25;
        this.opponent = null;
        this.attaques = attaques
    };
    seSoigner(valeur){
        this.hp+=valeur;
    }
    annonce(){
        // console.log(`Je m'appelle ${this.nom}, mes stats sont :\n\thp : ${this.hp}\n\tstrength : ${this.strength}\n\tendurance: ${this.endurance}`);
        let perso = document.getElementById(`personnage-p${this.id}`);
        let p = document.createElement('p');
        p.textContent = `Je m'appelle ${this.name},
             mes stats sont :  
             hp : ${this.hp} 
             strength : ${this.strength}  
             endurance: ${this.endurance}`;
        p.className = `paragraphe-p${this.id}`;
        perso.prepend(p);
    };
    attaquer(target){
        target.subirDommage(this.strength);
        this.endurance-=2;
        let choixAttaque = this.jouertour(Math.floor(Math.random() * this.attaques.length))
        console.log(`${this.nom} effectue ${choixAttaque.nom} contre ${target.nom} avec une force de ${choixAttaque.damage} et ${this.nom} perd ${choixAttaque.staminacost} d'endurance.`);
        this.castSpell(choixAttaque,this,target)

    };
    subirDommage(montant_dommage){
        this.hp-=montant_dommage;
    };
    get getHp(){
        return this.hp
    }
    get getEndurance(){
        return this.endurance
    }
    set setHp(id){
        document.getElementById(id).innerHTML = this.hp;
    }
    set setEndurance(id){
        document.getElementById(id).innerHTML = this.endurance;
    }
    jouertour(choix) {
        return this.attaques[choix]
    }
    castSpell(spell, caster, target){
        spell.cast(caster,target)
    }
};
class Spell {
    constructor(nom, damage, staminacost, castcallback){
        this.nom = nom
        this.damage = damage
        this.staminacost = staminacost
        this.castcallback = castcallback
    }
    cast(caster, target){
        caster.endurance -= this.staminacost
        target.subirDommage(this.damage)
        this.castcallback()
    }
}
export {Personnage, Spell};