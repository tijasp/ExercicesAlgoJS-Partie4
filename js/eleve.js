class Eleve {
    constructor(nom, prenom, classe) {
        this.nom = nom;
        this.prenom = prenom;
        this.classe = classe;
        this.notes = {
            maths: [],
            algorithmique: [],
            JavaScript: []
        };
    };

    // Retourne une chaine de caractère avec les variables associées à l'objet actuel.
    presentation() {
        return `Je suis ${this.prenom} ${this.nom} en classe ${this.classe}`
    };

    // Ajoute une note (param1) au tableau de la matière (param2) de l'objet actuel.
    ajouterNote(note, matiere) {
        switch(matiere) {
            case "algorithmique":
                this.notes.algorithmique.push(note);
                break;
            case "maths":
                this.notes.maths.push(note);
                break;
            case "JavaScript":
                this.notes.JavaScript.push(note);
                break;
            default:
                console.log("Matière invalide");
                break;
        };
    };
};