// Creer un village qui aura les attributs :
// 📌 nbvillageois | 1
// 📌 nbbois | 100
// 📌 nbpierre | 100
// 📌 nbor | 0
// 📌 Batiments | [HDV

class Village {
    constructor() {
        this.villageois = 1
        this.nbbois = 100
        this.nbpierre = 100
        this.nbor = 0
        this.Batiments = ["HDV"];
    }
    display(demande) {
        demande = demande.toLowerCase()
        if (demande=="ressources") {console.log(this.formatRessources())}
        if (demande=="villageois") {console.log(this.formatVillageois())}
        if (demande=="batiments") {console.log(this.formatBatiments())}
    }
    formatRessources(){
        return "Bois:"+this.nbbois+", Pierre:"+this.nbpierre+", Or:"+this.nbor;
    }
    formatVillageois(){
        return "Habitants:"+this.villageois;
    }
    formatBatiments(){
        return "Batiment:"+this.Batiments;
    }
}
let refractaire = new Village();

refractaire.display("Ressources");
refractaire.display("Villageois");
refractaire.display("Batiments");
let village = {
    villageois: 1,
    nbbois: 100,
    nbpierre: 100,
    nbor: 0,
    Batiments: ["HDV"]
}
console.log(village)

let village2 = new Object()
village2.villageois = 1
village2.nbbois = 100
village2.nbpierre = 100
village2.nbor = 0
village2.Batiments = ["HDV"]
console.log(village2)
