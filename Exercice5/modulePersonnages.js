import {Personnage, Spell} from './personnage.js';

// instanciate each of the characters:
let personnage1 = new Personnage("Borg", [new Spell("'attaque sournoise'", 40, 10, () => {console.log("C'est sournois !")})])
let personnage2 = new Personnage("Klaus", [new Spell("'se Faire Jeter Comme Un Malpropre'", 20, 30, () => {console.log("Tu vas te faire jeter comme un malpropre !")})])

// // instanciate new spell : EDIT: not use
// let sp1 = new Spell("attaque sournoise", 40, 10, () => {console.log("Attaque sournoise !")})


// // display informations of a character:
// personnage1.annonce()

// // do an attack
// personnage1.attaquer(personnage2)

// // cast a spell from caster to target
// personnage1.castSpell(sp1,personnage1,personnage2)

personnage1.attaquer(personnage2)
personnage2.attaquer(personnage1)
