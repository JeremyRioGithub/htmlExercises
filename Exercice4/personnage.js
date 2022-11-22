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
    constructor(nom, sante, force){
        this.nom = nom
        this.sante = sante
        this.force = force
    }
    whoAmI(){
        return "Je suis un personnage."
    }
    displayInfo(){
        this.display(this.displayNameAndProperties())
    }
    display(value){
        console.log(value)
    }
    displayProperties(){
        return "Nom: "+this.nom+", Sante: "+this.sante+", Force: "+this.force
    }
    displayNameAndProperties(){
        return this.whoAmI()+"\tNom: "+this.nom+", Sante: "+this.sante+", Force: "+this.force
    }
}
class Aventurier extends Personnage {
    constructor(nom, sante, force, xp){
        super (nom, sante, force)
        this.xp = xp
    }
    whoAmI(){
        return "Je suis un aventurier."
    }
    displayInfo(){
        this.display(this.displayNameAndProperties())
    }
    display(value){
        console.log(value)
    }
    displayProperties(){
        return super.displayProperties() + ", Xp: " + this.xp
    }
    displayNameAndProperties(){
        return this.whoAmI() +"\t" + super.displayProperties() + ", Xp: " + this.xp
    }
}
class Guerrier extends Personnage {
    constructor(nom, sante, force, rage){
        super (nom, sante, force)
        this.rage = rage
    }
    whoAmI(){
        return "Je suis un guerrier."
    }
    displayInfo(){
        this.display(this.displayNameAndProperties())
    }
    display(value){
        console.log(value)
    }
    displayProperties(){
        return super.displayProperties()+", Rage: "+this.rage
    }
    displayNameAndProperties(){
        return this.whoAmI() +"\t" + super.displayProperties() + ", Rage: "+this.rage
    }
}
class Palladin extends Aventurier {
    constructor(nom, sante, force, xp, vertu){
        super (nom, sante, force, xp)
        this.vertu = vertu
    }
    whoAmI(){
        return "Je suis un palladin."
    }
    displayInfo(){
        this.display(this.displayNameAndProperties())
    }
    display(value){
        console.log(value)
    }
    displayProperties(){
        return super.displayProperties()+", Vertu: "+this.vertu
    }
    displayNameAndProperties(){
        return this.whoAmI() +"\t" + super.displayProperties() + ", Vertu: "+this.vertu
    }
}
class Mage extends Aventurier {
    constructor(nom, sante, force, xp, mana){
        super (nom, sante, force, xp)
        this.mana = mana
    }
    whoAmI(){
        return "Je suis un mage."
    }
    displayInfo(){
        this.display(this.displayNameAndProperties())
    }
    display(value){
        console.log(value)
    }
    displayProperties(){
        return super.displayProperties()+", Mana: "+this.mana
    }
    displayNameAndProperties(){
        return this.whoAmI() +"\t"+ super.displayProperties() + ", Mana: "+this.mana
    }
}

export {Personnage, Aventurier, Guerrier, Palladin, Mage};