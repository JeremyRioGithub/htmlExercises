// Creer un village qui aura les attributs :
// 📌 nbvillageois | 1
// 📌 nbbois | 100
// 📌 nbpierre | 100
// 📌 nbor | 0
// 📌 Batiments | [HDV

// methode 1:
class Village {
    constructor(villageois, nbbois, nbpierre, nbor, Batiments) {
        this.villageois = villageois
        this.nbbois = nbbois
        this.nbpierre = nbpierre
        this.nbor = nbor
        this.Batiments = Batiments
    }
    display(demande) {
        demande = demande.toLowerCase()
        if (demande == "ressources") { console.log(this.formatRessources()) }
        if (demande == "villageois") { console.log(this.formatVillageois()) }
        if (demande == "batiments") { console.log(this.formatBatiments()) }
    }
    formatRessources() {
        return "Bois:" + this.nbbois + ", Pierre:" + this.nbpierre + ", Or:" + this.nbor;
    }
    formatVillageois() {
        return "Habitants:" + this.villageois;
    }
    formatBatiments() {
        return "Batiment:" + this.Batiments;
    }
    ajouterVillageois(valeur) {
        return this.villageois += valeur
    }
    reproduireVillageois() {
        return this.villageois = Math.round(this.villageois * 1.02)
    }
    displayAllData() {
        this.display("Ressources");
        this.display("Villageois");
        this.display("Batiments");
    }
    endOfRound(){
        this.reproduireVillageois();
    }
    eachVillagerHas(){
        return
    }

}
let gauloisRefractaires = new Village(1, 100, 100, 0, ["HDV"]);
gauloisRefractaires.displayAllData();
gauloisRefractaires.ajouterVillageois(150);
gauloisRefractaires.display("Villageois");
gauloisRefractaires.endOfRound();
gauloisRefractaires.display("Villageois");