const projets = [
  {
    titre: "Wonderline",
    categorie: "design",
    image:"./assets/img/parkezz.jpeg",
  },
  {
    titre: "Culture & co",
    categorie: "design",
    image: "./assets/img/cult.png",
  },
  {
    titre: "Stars wars",
    categorie: "CSS",
    image: "./assets/img/stars.png",
  },
];

function monPorteFolio(projet) {
  for (let i = 0; i < projets.length; i++) {
    // pas besoin de toucher à ça, on récupère un élément déjà initialisé avec ses propriétés (voir dans le html)
    const container = document.getElementById("mes-projets");
    const test = document.createElement("div");
    test.className = "cartecontainer";
    container.appendChild(test);

    // On initialise d'abord la balise img, puis on lui ajoute toute ses propriétés

    const image = document.createElement("img");
    image.className = "projet-img";
    image.src = projets[i].image;
    test.appendChild(image);

    // même logique qu'au dessus pour chaque élément
    const titre = document.createElement("h3");
    // className = ajouter une classe à l'élément, classList = modifier les classes déjà existantes sur l'élément
    // (80% du temps c'est className à utiliser sauf projet giga complexe)
    titre.className = "projet-title";
    titre.textContent = projets[i].titre;
    test.append(titre);

    const categorie = document.createElement("h2");
    categorie.className = "categoriprojet";
    categorie.textContent = projets[i].categorie;
    test.append(categorie);
  }
}

monPorteFolio(projets);


