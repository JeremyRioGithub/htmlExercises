import { Personnage } from './Personnage.js';
const divWrap = document.getElementById("wrapper");
const p1 = new Personnage(1, "Vampirette");
const p2 = new Personnage(2, "Sanguy");
function play() {
    let indexPersonnageChoice = document.ChoixPersonnage.Liste.selectedIndex;
    if (indexPersonnageChoice == 0) return;
    res = document.ChoixPersonnage.Liste.options[indexPersonnageChoice].value;
    console.log(res)
    // const p1 = new Personnage(1, res);
    // const p2 = new Personnage(2, "Sanguy");

    // display img1
    divWrap.innerHTML = `
        <div id="personnage-p1">
            <img id="p1" src="assets/vampire.png" alt="personnage" />
        </div>
        <div class="box personnage-b1">
            <progress class="progress" value="150" max="200">75%</progress>
            <div class="sorts">
                <button onclick="p1.annonce()">Se présenter</button>
            </div>
        </div>
        <div id="personnage-p2">
            <img id="p2" src="assets/vampire.png" alt="personnage" />
        </div>
        <div class="box personnage-b2">
            <progress class="progress" value="150" max="200">75%</progress>
            <div class="sorts">
                <button onclick="p2.annonce()">Se présenter</button>
            </div>
        </div>`
}