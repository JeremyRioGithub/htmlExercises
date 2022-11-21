// === Ex1 test ===
// function direBonjour(){
//     console.log("Bonjour")
// }
// setTimeout(direBonjour, 1432)
// (setTimeout(console.log("Bonjour"), 1432))(); // renvoie une erreur...

// === Ex1 ===
// // Dire bonjour au bout de 1.5 secondes.
// function waitAndSay(say, millisec){
//     setTimeout(() => console.log("bonjour"),0)
//     setTimeout(() => console.log("bonjour"),1000)
//     setTimeout(() => console.log("bonjour"),2000)
//     setTimeout(() => console.log(say),millisec)
// }
// waitAndSay("Bonjour",1440)

// === Ex2 ===
// // la fonction "aumoins3" vérifie qu'au moins 3 elements de la chaine repondent true à l'appel de la fonction "verifcallback", et renvoie le résultat par un booléen.
// function verifcallback(valeur) {
//         if (valeur >= 5) {
//             return true
//         }
// }
// function aumoins3(array, verifcallback) {
//     compteurVerif=0;
//     for (compteur in array){
//         if(verifcallback(array[compteur])){
//             compteurVerif++
//         }
//     }
//     if (compteurVerif>=3){
//         console.log("true")
//         return true
//     }
//     console.log("false")
//     return false
// }
// aumoins3([0, 1, 2, 3, 4, 5, 6, 7], verifcallback);

// === Ex3 ===
// filter renvoie les elements qui vérifient la condition de verifcallback testée comme une fonction flechée
function filter(array, verifcallback) {
    arrayVerif=[];
    for (compteur in array){
        if(verifcallback(array[compteur])){
            arrayVerif.push(array[compteur])
        }
    }
    return arrayVerif
}
console.log(filter([8,9,10,11,0,1,2,3], (elem) => elem>=5))
