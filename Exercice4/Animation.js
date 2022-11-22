// Créer un module Animation.js qui contiendra la classe Animation qui aura les méthodes suivantes:
// - constructor(element)
// - deplacer(x, y)
// - agrandir(largeur, hauteur)
// - changerCouleur(couleur)
// - pivoter(degrees)
// - disparaitre()
// - apparaitre()

class Animation {
    constructor(element) {
        this.element = element
    }
    deplacer(x, y) {
        this.element.style.position = 'absolute';
        this.element.style.top = y + "px";
        this.element.style.bottom = y + "px";
        this.element.style.right = x + "px";
        this.element.style.left = x + "px";
        console.log(this.element.style.top)
    }
    agrandir(largeur, hauteur) {
        this.element.style.height = hauteur + "px";
        this.element.style.width = largeur + "px";
    }
    changerCouleur(couleur) {
        this.element.style.color = couleur;
    }
    pivoter(degrees) {
        this.element.style.transform = "rotate(" + degrees + "deg)";
    }
    disparaitre() {
        this.element.hidden = true;
        // this.element.style.display = "none";
    }
    apparaitre() {
        this.element.hidden = false;
        // this.element.style.display = 'block';
    }
    changerTexte(says) {
        this.element.innerHTML = says
    }
    key() {
        var logKey = (souris) => {
            this.element.innerText = `Screen X/Y: ${souris.screenX}, ${souris.screenY} 
            Client X/Y: ${souris.clientX}, ${souris.clientY}`
        }
        document.addEventListener('mousemove', logKey);
        // document.removeEventListener("mousemove", logKey);
    }
}