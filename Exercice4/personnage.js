// Exercice 1:
// Créer une classe Personnage qui aura les attributs:
// 📌 nom
// 📌 sante
// 📌 force
// Exercice 2:
// Créer une classe Aventurier qui hérite de Personnage et qui aura
// l'attribut supplémentaire:
// 📌 xp
// Exercice 3:
// Créer une classe Guerrier qui hérite de Personnage et qui aura
// l'attribut supplémentaire:
// 📌 rage
// Exercice 4:
// Créer une classe Paladin qui hérite de Aventurier et qui aura
// l'attribut supplémentaire:
// 📌 vertu
// Exercice 5:
// Créer une classe Mage qui hérite de Aventurier et qui aura
// l'attribut supplémentaire :
// 📌 mana

class Personnage {
    constructor(){
        this.nom = "Borg"
        this.sante = 100
        this.force = 54
    }
}
class Aventurier extends Personnage {
    constructor(){
        super ()
        this.xp = 1366
    }
}
class Guerrier extends Personnage {
    constructor(){
        super ()
        this.rage = 0.1
    }
}
class Palladin extends Aventurier {
    constructor(){
        super ()
        this.vertu = 0.05
    }
}
class Mage extends Aventurier {
    constructor(){
        super ()
        this.mana = 27
    }
}
let personnage1 = new Personnage()
let aventurier1 = new Aventurier()
let guerrier1 = new Guerrier()
let palladin1 = new Palladin()
let mage1 = new Mage()
