import { Personnage, Aventurier, Guerrier, Palladin, Mage } from './personnage.js';

// instanciate each of the characters:
let personnage1 = new Personnage("Borg", 100, 54)
let aventurier1 = new Aventurier("Jake", 65, 136, 1326)
let guerrier1 = new Guerrier("Krug", 65, 137, 0.3)
let palladin1 = new Palladin("Poly", 26, 139, 35, 0.2)
let mage1 = new Mage("Mergnum", 65, 138, 35, 132)

// // display the type of a character, then the properties of the character:
// console.log(personnage1.whoAmI())
// console.log(personnage1.displayProperties())

// display informations of each character:
personnage1.displayInfo()
aventurier1.displayInfo()
guerrier1.displayInfo()
palladin1.displayInfo()
mage1.displayInfo()