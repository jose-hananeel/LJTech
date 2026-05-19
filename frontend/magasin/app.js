let themeClair = true;
let mobileMenuBtn = document.getElementById("mobileMenu");
let navMenu = document.getElementById("navMenu");
let estConnecte = false;
let utilisateurActuel = "";
let panier = [];

function changerTheme() {
  themeClair = !themeClair;
  if (themeClair === true) {
    document.body.setAttribute("data-theme", "light");
  } else {
    document.body.setAttribute("data-theme", "dark");
  }
}

function basculerMenu() {
  navMenu.classList.toggle("active");
}

function showSection(idSection) {
  let toutesLesSections = document.querySelectorAll(".view");

  for (let i = 0; i < toutesLesSections.length; i++) {
    toutesLesSections[i].style.display = "none";
  }

  let sectionAVisualiser = document.getElementById(idSection);
  if (sectionAVisualiser) {
    sectionAVisualiser.style.display = "block";
  }
  if (idSection === "cart") {
    afficherPanier();
  }
  navMenu.classList.remove("active");
}
mobileMenuBtn.onclick = basculerMenu;

// sa li m mete donnée sa yo se poum ka teste fonction se connecter ak s'inscrire yo, an apre fok  mwen delete pati sa yo
let listeUtilisateurs = [
  { utilisateur: "nano", mdp: "1234", role: "client" },
  { utilisateur: "jean", mdp: "azerty", role: "client" },
  { utilisateur: "jose", mdp: "1234", role: "admin" },
  { utilisateur: "joseph", mdp: "soleil", role: "client" },
];

function connexion(event) {
  event.preventDefault();

  let nomSaisi = document.getElementById("username").value;
  let mdpSaisi = document.getElementById("password").value;
  let compteTrouve = null;
  let messageErreur = document.getElementById("loginError");
  for (let i = 0; i < listeUtilisateurs.length; i++) {
    if (
      listeUtilisateurs[i].utilisateur === nomSaisi &&
      listeUtilisateurs[i].mdp === mdpSaisi
    ) {
      compteTrouve = listeUtilisateurs[i];
      break;
    }
  }

  if (compteTrouve !== null) {
    estConnecte = true;
    utilisateurActuel = nomSaisi;
    if (compteTrouve.role === "admin") {
      alert("Bienvenue Administrateur, redirection vers le dashboard");
      window.location.href = "/frontend/admin/admin.html";
    } else {
      document.getElementById("deconnect").style.display = "block";
      document.getElementById("connect").style.display = "none";
      document.getElementById("titrePrincipal").style.display = "none";
      document.getElementById("nom").innerText = nomSaisi;
      document.getElementById("titreSecondaire").style.display = "block";
      document.getElementById("boutonPrincipal").style.display = "none";
      document.getElementById("boutonSecondaire").style.display =
        "inline-block";
      showSection("home");
    }
  } else {
    messageErreur.innerText = "Nom d'utilisateur ou mot de passe incorrect.";
    messageErreur.style.display = "block";
  }
}

function deconnexion() {
  estConnecte = false;
  utilisateurActuel = "";
  document.getElementById("titrePrincipal").style.display = "block";
  document.getElementById("titreSecondaire").style.display = "none";

  document.getElementById("boutonPrincipal").style.display = "inline-block";
  document.getElementById("boutonSecondaire").style.display = "none";

  document.getElementById("deconnect").style.display = "none";
  document.getElementById("connect").style.display = "block";
  showSection("home");
  alert("Déconnection effectuée avec succès, on retourne à la page d'accueil");
}

function inscription(event) {
  event.preventDefault();

  let newUser = document.getElementById("nomUtilisateurCl").value;
  let newMdp = document.getElementById("motDePasseCl").value;
  let newMdp2 = document.getElementById("motDePasseCl2").value;
  let msgReg = document.getElementById("messageErreur");

  let existeDeja = false;
  for (let i = 0; i < listeUtilisateurs.length; i++) {
    if (listeUtilisateurs[i].utilisateur === newUser) {
      existeDeja = true;
      break;
    }
  }

  if (existeDeja) {
    msgReg.innerText = "Ce nom d'utilisateur est déjà pris.";
    msgReg.style.display = "block";
  } else if (newMdp !== newMdp2) {
    msgReg.innerText = "Les 2 mot de passe ne correspondent pas.";
    msgReg.style.display = "block";
  } else {
    listeUtilisateurs.push({
      utilisateur: newUser,
      mdp: newMdp,
    });
    alert("Inscription réussie ! Connectez-vous maintenant.");
    showSection("login");
  }
}

let produits = [
  {
    id: 1,
    nom: "Samsung A21",
    categorie: "téléphone",
    prix: 800,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 2,
    nom: "Airpods OG",
    categorie: "casque",
    prix: 50,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 3,
    nom: "Casque bluetooth",
    categorie: "casque",
    prix: 30,
    description:
      "Lorem ipsum dolor siomnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 4,
    nom: "Iphone 21",
    categorie: "téléphone",
    prix: 1940.15,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 5,
    nom: "Samsung TV ",
    categorie: "télévision",
    prix: 1300,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 6,
    nom: "LG Smart Tv ",
    categorie: "télévision",
    prix: 1099.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisiihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum! 20",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 7,
    nom: "Chargeur type C",
    categorie: "chargeur",
    prix: 10,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!",
    image: "frontend/Assets/image1.jpeg",
  },
  {
    id: 8,
    nom: "Chargeur ZTE",
    categorie: "chargeur",
    prix: 6.99,
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariat! Voluptatibus, harum! 20",
    image: "frontend/Assets/image1.jpeg",
  },
];

let categorieActive = "tous";
function afficherCatalogue(motRecherche = "") {
  let grille = document.querySelector("#productGrid");
  grille.innerHTML = "";

  let produitTrouve = 0;
  for (let i = 0; i < produits.length; i++) {
    let article = produits[i];
    let nomProduit = article.nom.toLowerCase();
    let recherche = motRecherche.toLowerCase();
    let correspondRecherche = nomProduit.includes(recherche);
    let correspondCategorie =
      categorieActive === "tous" || article.categorie === categorieActive;

    if (correspondRecherche && correspondCategorie) {
      produitTrouve = 1;
      let card = `
            <div class="card">
                <img src="${article.image}" alt="${article.nom}">
                <h3>${article.nom}</h3>
                <p class="desc">${article.description}</p>                
                <span class="price">$ ${article.prix}</span>
                <button class="mainButton" id="btncatalog" onclick="ajouterAuPanier(${article.id})">
                    Ajouter au panier  <i class="fa-solid fa-cart-plus"></i> 
                </button>
            </div> 
        `;
      grille.innerHTML += card;
    }
  }
  if (produitTrouve === 0) {
    grille.innerHTML = `
                <div class="noResult">
                <p>Désolé, aucun produit ne correspond à votre recherche.</p>
            </div>
            `;
  }
}

function effectuerRecherche() {
  let texteARechercher = document.getElementById("liveSearch").value;
  afficherCatalogue(texteARechercher);
}

// sa ma jerel apre
// function filtrerParCategorie(nomCategorie) {
//     categorieActive = nomCategorie;
//     let texteSaisi = document.getElementById('liveSearch').value.toLowerCase;
//     afficherCatalogue(texteSaisi);
// }

function mettreAJourCompteur() {
  let qteTotal = 0;
    for (let i = 0; i < panier.length; i++) {
        qteTotal += panier[i].quantite;
    }
    document.getElementById("cartCount").innerText = qteTotal;


}

function ajouterAuPanier(idProduit) {
  let produitsTrouves = null;
  for (let i = 0; i < produits.length; i++) {
    if (produits[i].id === idProduit) {
      produitsTrouves = produits[i];
      break;
    }
  }
  if (produitsTrouves !== null) {
      let articleExiste = null ;
      for (let j = 0; j < panier.length; j++) {
        if (panier[j].id === idProduit) {
          articleExiste = panier[j];
          break;
        }
      }

        if (articleExiste !== null ) {
          articleExiste.quantite ++;
        }
        else {
          let nouvelArticle = {
              id: produitsTrouves.id,
              nom: produitsTrouves.nom,
              prix: produitsTrouves.prix,
              image: produitsTrouves.image,
              quantite: 1
          };
        panier.push(nouvelArticle);
        }

    
    mettreAJourCompteur();
    afficherPanier();
    // alert(produitsTrouves.nom + " ajouté au panier !");
  }
}

function supprimerDuPanier(indexElement) {
  panier.splice(indexElement, 1);
  mettreAJourCompteur();
  afficherPanier();
}

function modifierQuantite(index, changement){
  panier[index].quantite += changement;
  if (panier[index].quantite <= 0) {
    panier.splice(index, 1);
  }
  mettreAJourCompteur();
  afficherPanier();
}


function afficherPanier() {
  let zoneContenu = document.getElementById("cartItems");
  let zoneTotal = document.getElementById("totalPrice");
  zoneContenu.innerHTML = "";
  let sommeAchat = 0;
  if (panier.length === 0) {
    zoneContenu.innerHTML = "<p>Votre panier est actuellement vide !</p>";
    zoneTotal.innerText = "0.00";
    return;
  }
  for (let i = 0; i < panier.length; i++) {
    let article = panier[i];
    let sousTotal = article.prix * article.quantite;
    sommeAchat += sousTotal;
      
    let affichagePanier = `
             <div class="cartItem">
                <img src="${article.image}" alt="${article.nom}">
                <div class="itemInfo">
                    <h4>${article.nom}</h4>
                    <span>$ ${article.prix.toFixed(2)} (  x ${article.quantite})</span>
                </div>
                <div class="quantitySelector">
                    <button class="qtyBtn" onclick="modifierQuantite(${i}, -1)">-</button>
                    <span id= "qteArticle">${article.quantite}</span>
                    <button class="qtyBtn" onclick="modifierQuantite(${i}, 1)">+</button>
                </div>
                <div style="font-weight: bold; min-width: 80px; text-align: right;">
                    $ ${sousTotal.toFixed(2)}
                </div>
                <button class="btnDelete" onclick="supprimerDuPanier(${i})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </div>
        `;
    zoneContenu.innerHTML += affichagePanier;
  }
  zoneTotal.innerText = sommeAchat.toFixed(2);
}

    



function validerAchat() {
  if (panier.length === 0) {
    alert("Votre panier est vide, ajoutez au moins un article");
    showSection("catalog");
    return;
  }
  if (estConnecte === false) {
    alert("Veuillez vous connecter pour passer votre commande !");
    showSection("login");
    return;
  }
  let confirmation = confirm("Voulez-vous vraiment valider cette commande?");
  if (confirmation === true) {
    // la se pou backend lan travay, pou diminye stock la, anrejistre acha a ....
    alert(
      "Commande effectuée avec succès! Merci pour votre confiance, " +
        utilisateurActuel +
        ".",
    );
    panier = [];
    mettreAJourCompteur();
    showSection("home");
  } else {
    alert("commande annulée.");
  }
}

document.getElementById("liveSearch").oninput = effectuerRecherche;
afficherCatalogue();
