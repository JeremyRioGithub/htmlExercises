import { Personnage } from './Personnage.js';


console.log("coucou");
let p1 = null;
let p2 = null;
// const p1 = new Personnage(1, "Vampirette");
// const p2 = new Personnage(2, "Sanguy");

const divWrap = document.getElementById("wrapper");
function play() {
    let indexPersonnageChoice = document.ChoixPersonnage.Liste.selectedIndex;
    if (indexPersonnageChoice == 0) return;
    let res = document.ChoixPersonnage.Liste.options[indexPersonnageChoice].value;
    console.log(res);
    // const p1 = new Personnage(1, res);
    p1 = new Personnage(1, res);
    console.log(p1);
    p2 = new Personnage(2, "Sanguy");

    // display img1
    divWrap.innerHTML = `
    <div id="personnage-p1">
        <img id="p1" src="assets/vampire.png" alt="personnage" />
    </div>
    <div class="box personnage-b1">
        <progress class="progress" value="150" max="200">75%</progress>
        <div class="sorts">
            <button id="p1Annonce">Se présenter</button>
        </div>
    </div>
    <div id="personnage-p2">
        <img id="p2" src="assets/vampire.png" alt="personnage" />
    </div>
    <div class="box personnage-b2">
        <progress class="progress" value="150" max="200">75%</progress>
        <div class="sorts">
            <button id="p2Annonce">Se présenter</button>
        </div>
    </div>`
    document.getElementById("p1Annonce").addEventListener("click", () => {p1.annonce()});
    document.getElementById("p2Annonce").addEventListener("click", () => {p2.annonce()});
    // return res;
}

document.getElementById("b1").addEventListener("click", play);
document.getElementById("Liste").addEventListener("click", play);



