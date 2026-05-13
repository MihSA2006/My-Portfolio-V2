// ===============================
// RAKOTOARIMANANA Misandratra Harena Sarobidy
// L3 GL N° 114/LA/25-26
// ===============================


// Exercice 1
const etudiants = [
    { id: 1, nom: "Rakoto", filiere: "GL", moyenne: 12 },
    { id: 2, nom: "Rabe", filiere: "IG", moyenne: 9 },
    { id: 3, nom: "Rasoa", filiere: "ASR", moyenne: 15 },
    { id: 4, nom: "Koto", filiere: "GB", moyenne: 11 }
];

console.log("=== Liste des noms ===");

etudiants.forEach(etudiant => {
    console.log(etudiant.nom);
});

console.log("\n=== Destructuration ===");

etudiants.forEach(({ nom, moyenne }) => {
    console.log(`${nom} a une moyenne de ${moyenne}`);
});


// Exercice 2 – Manipulation des tableaux

console.log("\n=== Étudiants admis ===");

const admis = etudiants.filter(e => e.moyenne >= 10);

console.log(admis);

console.log("\n=== Tableau des noms ===");

const noms = etudiants.map(e => e.nom);

console.log(noms);

console.log("\n=== Moyennes augmentées ===");

const nouvellesMoyennes = etudiants.map(e => ({
    ...e,
    moyenne: e.moyenne + 1
}));

console.log(nouvellesMoyennes);

console.log("\n=== Tableau original ===");
console.log(etudiants);


// Exercice 3 – Fonctions fléchées et template literals

const afficherEtudiant = (etudiant) => {
    console.log(
        `L'étudiant ${etudiant.nom} de la filière ${etudiant.filiere} a une moyenne de ${etudiant.moyenne}`
    );
};

console.log("\n=== Affichage étudiant ===");

etudiants.forEach(afficherEtudiant);


// Exercice 4 – Programmation asynchrone

function chargerEtudiants() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(etudiants);
        }, 2000);

    });
}


async function afficherEtudiantsAsync() {

    try {
        console.log("\nChargement des étudiants...");

        const resultat = await chargerEtudiants();

        console.log("=== Étudiants chargés ===");
        console.log(resultat);

    } catch (erreur) {

        console.error("Erreur :", erreur);

    }

}

afficherEtudiantsAsync();


// Exercice 5 – reduce()
const sommeMoyennes = etudiants.reduce(
    (total, etudiant) => total + etudiant.moyenne,
    0
);

const moyenneGenerale = sommeMoyennes / etudiants.length;

console.log("\n=== Moyenne générale de la classe ===");
console.log(moyenneGenerale);