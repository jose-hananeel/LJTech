
function showAdminSection(idSection) {
    let toutesLesSections = document.querySelectorAll('.view');

    for (let i = 0; i < toutesLesSections.length; i++) {
        toutesLesSections[i].style.display = 'none';
    }

    let sectionAVisualiser = document.getElementById(idSection);
    if (sectionAVisualiser) {
        sectionAVisualiser.style.display = 'block';
    }
     
     if (idSection === "adminDashboard") {
        calculerEtAfficherDashboard();
        dessinerGraphiquePerformance();
    }
    
     if (idSection === "listerProduits") {
        algoListerProduits();
}


   
}

let listeClients = [
  { identifiantCl: "001",nomCl : "Pierre", prenomCl : "Jose-Hananeel", adresseCl : "Madeline", nomUtilisateurCl : "nano", motDePasseCl: "1234", role: "client" },
  { identifiantCl: "002",nomCl : "Joseph", prenomCl : "Janvier", adresseCl : "Cap-Haïtien", nomUtilisateurCl : "jose", motDePasseCl: "1234", role: "admin" }
  
];

let produits = [
  { id: 1, nom: "Samsung A21", categorie: "téléphone", prix: 800, quantite: 15, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 2, nom: "Airpods OG", categorie: "casque", prix: 50, quantite: 30, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 3, nom: "Casque bluetooth", categorie: "casque", prix: 30, quantite: 8, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 4, nom: "Iphone 21", categorie: "téléphone", prix: 1940.15, quantite: 5, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 5, nom: "Samsung TV", categorie: "télévision", prix: 1300, quantite: 12, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 6, nom: "LG Smart Tv", categorie: "télévision", prix: 1099.99, quantite: 7, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 7, nom: "Chargeur type C", categorie: "chargeur", prix: 10, quantite: 50, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" },
  { id: 8, nom: "Chargeur ZTE", categorie: "chargeur", prix: 6.99, quantite: 22, etat: 1, description: "Lorem ipsum...", image: "frontend/Assets/image1.jpeg" }
];


let monGraphiqueInstance = null;

function inscription(event) {
  event.preventDefault();

  let nom= document.getElementById("nomCl").value;
  let prenom = document.getElementById("prenomCl").value;
  let adresse = document.getElementById("adresseCl").value;

  let nomUtilisateur = document.getElementById("nomUtilisateurCl").value;
  let motDePasse = document.getElementById("motDePasseCl").value;
  let motDePasse2 = document.getElementById("motDePasseCl2").value;
  let msgReg = document.getElementById("messageErreur");

  let existeDeja = false;
  for (let i = 0; i < listeClients.length; i++) {
    if (listeClients[i].nomUtilisateurCl === nomUtilisateur) {
      existeDeja = true;
      break;
    }
  }

  if (existeDeja) {
    msgReg.innerText = "Ce nom d'utilisateur est déjà pris.";
    msgReg.style.display = "block";
  } else if (motDePasse !== motDePasse2) {
    msgReg.innerText = "Les 2 mot de passe ne correspondent pas.";
    msgReg.style.display = "block";
  } else {
    
    listeClients.push({
      identifiantCl : nomUtilisateur ,  //  pou id a fok li jenere otomatik....
      nomCl : nom, 
      prenomCl : prenom, 
      adresseCl : adresse, 
      nomUtilisateurCl : nomUtilisateur, 
      motDePasseCl: motDePasse, 
      role: "client"
    });
    alert("Inscription réussie !");

   showAdminSection("adminDashboard");
}
}

function rechercherClient() {
let idRecherche = document.getElementById("identifiant");
let zoneContenu = document.getElementById("resultatRecherche");
let pos = - 1;
for (let i = 0; i < listeClients.length; i++) {
       if (listeClients[i].identifiantCl === identifiant) {
           pos = i;
       }
} // sa poum regade lojik la ank
        // if (pos !== - 1) {
           let client = `
              <h4> ${listeClients[pos].identifiantCl}</h4>
              <h4>Nom : ${listeClients[pos].nomCl}</h4>
              <h4>Prenom :${listeClients[pos].prenomCl}</h4>
              <h4>Adresse : ${listeClients[pos].adresseCl}</h4>
              <h4>Nom Utilisateur :${listeClients[pos].nomUtilisateurCl}</h4>
              <h4>${listeClients[pos].motDePasseCl}</h4>
       `
       zoneContenu.innerHTML += client;
    //     }
    //    else {
    //     alert("Identifiant de client non trouvé !");
    //    }
    
    
    }



function calculerEtAfficherDashboard() {

    let totalClients = listeClients.length;  
    let totalVentes = 100;   
    
    let totalStockArticles = 0;
    for (let i = 0; i < produits.length; i++) {
  
        if (produits[i].etat === 1) {
            totalStockArticles = totalStockArticles + produits[i].quantite;
        }
    }

    document.getElementById('dash-nb-clients').innerText = totalClients;
    document.getElementById('dash-nb-ventes').innerText = totalVentes;
    document.getElementById('dash-nb-produits').innerText = totalStockArticles;
}


function dessinerGraphiquePerformance() {
    let listeNoms = [];
    let listeStocks = [];

    for (let i = 0; i < produits.length; i++) {
      
        if (produits[i].etat === 1) {
            listeNoms.push(produits[i].nom);       
            listeStocks.push(produits[i].quantite); 
        }
    }

    let zoneGraph = document.getElementById('performanceChart').getContext('2d');
    

    if (monGraphiqueInstance !== null) {
        monGraphiqueInstance.destroy();
    }


    monGraphiqueInstance = new Chart(zoneGraph, {
        type: 'bar', 
        data: {
            labels: listeNoms, 
            datasets: [{
                label: 'Quantité disponible en stock',
                data: listeStocks, 
                backgroundColor: '#3F8DEB', 
                borderRadius: 6
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true 
                }
            }
        }
    });
}


function algoEnregistrerProduit(event) {

    event.preventDefault();

    let nomSaisi = document.getElementById("add-nom").value;
    let categorieSaisie = document.getElementById("add-categorie").value;
    let prixSaisi = document.getElementById("add-prix").value;
    let quantiteSaisie = document.getElementById("add-quantite").value;
    let descriptionSaisie = document.getElementById("add-description").value;
    let imageSaisie = document.getElementById("add-image").value;
    
    let zoneMessage = document.getElementById("msgEnregistrer");

    let idUnique = Date.now();


    let nouveauProduit = {
        id: idUnique,
        nom: nomSaisi,
        categorie: categorieSaisie,
        prix: parseFloat(prixSaisi),       
        quantite: parseInt(quantiteSaisie), 
        etat: 1,                          
        description: descriptionSaisie,
        image: imageSaisie
    };

   
    produits.push(nouveauProduit);


    zoneMessage.innerText = "Le produit '" + nomSaisi + "' a bien été ajouté à l'inventaire !";
    zoneMessage.style.color = "green";
    zoneMessage.style.display = "block";

   
    document.getElementById("formEnregistrer").reset();

    showAdminSection("adminDashboard");
    console.log("Inventaire complet après ajout :", produits);
}

function algoRechercherProduitParId() {
  // m komvèti id a an chif selman , m pa konn siw tap mete lettre ladan pou produits yo
    let idSaisi = parseInt(document.getElementById("inputRecherche").value);
    let grilleResultats = document.getElementById("searchGrid");
    

    grilleResultats.innerHTML = "";


    if (isNaN(idSaisi)) {
        grilleResultats.innerHTML = "<p style='color:gray; text-align:center; width:100%;'>En attente d'un numéro d'ID...</p>";
        return; 
    }

   
    let produitTrouve = null;


    for (let i = 0; i < produits.length; i++) {
        
        if (produits[i].id === idSaisi && produits[i].etat === 1) {
            produitTrouve = produits[i]; 
            break; 
        }
    }


    if (produitTrouve !== null) {

        let carte = `
            <div class="product-card">
                <img src="${produitTrouve.image}" alt="${produitTrouve.nom}">
                <h3><span style="color: gray; font-size: 0.9rem;">[ID: ${produitTrouve.id}]</span> ${produitTrouve.nom}</h3>
                <p class="desc">${produitTrouve.description}</p>
                <span class="prix">$ ${produitTrouve.prix.toFixed(2)}</span>
                
              
                <div style="margin-top: 15px; padding-top: 10px; border-top: 1px dashed #eee; font-size: 0.85rem; color: var(--texteSecondaire);">
                    <p><strong>Catégorie :</strong> ${produitTrouve.categorie}</p>
                    <p style="margin-top: 5px;"><strong>Stock disponible :</strong> ${produitTrouve.quantite} unités</p>
                </div>
            </div>
        `;
        grilleResultats.innerHTML = carte;

    } else {

        grilleResultats.innerHTML = "<p style='color:red; text-align:center; width:100%;'>Aucun produit actif ne possède l'ID " + idSaisi + ".</p>";
    }
}




function algoChercherPourModifier() {
    let idSaisi = parseInt(document.getElementById("edit-search-id").value);
    let errorMsg = document.getElementById("msgErrorModif");
    let formulaire = document.getElementById("formModifier");

    if (isNaN(idSaisi)) {
        errorMsg.innerText = "Veuillez entrer un numéro d'ID valide.";
        errorMsg.style.display = "block";
        formulaire.style.display = "none";
        return;
    }

    let articleTrouve = null;


    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === idSaisi && produits[i].etat === 1) {
            articleTrouve = produits[i];
            break;
        }
    }

    if (articleTrouve !== null) {

        errorMsg.style.display = "none";
        
        document.getElementById("edit-id").value = articleTrouve.id;
        document.getElementById("edit-nom").value = articleTrouve.nom;
        document.getElementById("edit-categorie").value = articleTrouve.categorie;
        document.getElementById("edit-prix").value = articleTrouve.prix;
        document.getElementById("edit-quantite").value = articleTrouve.quantite;
        document.getElementById("edit-description").value = articleTrouve.description;
        document.getElementById("edit-image").value = articleTrouve.image;

      
        document.getElementById("titre-form-modif").innerText = "Modifier : " + articleTrouve.nom;
        formulaire.style.display = "block";
    } else {
     
        errorMsg.innerText = "Aucun produit actif trouvé avec l'ID " + idSaisi;
        errorMsg.style.display = "block";
        formulaire.style.display = "none";
    }
}


function algoSauvegarderModification(event) {
    event.preventDefault(); 


    let idAModifier = parseInt(document.getElementById("edit-id").value);

   
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === idAModifier) {
           
            produits[i].nom = document.getElementById("edit-nom").value;
            produits[i].categorie = document.getElementById("edit-categorie").value;
            produits[i].prix = parseFloat(document.getElementById("edit-prix").value);
            produits[i].quantite = parseInt(document.getElementById("edit-quantite").value);
            produits[i].description = document.getElementById("edit-description").value;
            produits[i].image = document.getElementById("edit-image").value;
            break; 
        }
    }

    alert("Les modifications ont été enregistrées avec succès dans l'inventaire !");
    
   
    document.getElementById("formModifier").reset();
    document.getElementById("formModifier").style.display = "none";
    document.getElementById("edit-search-id").value = "";
    
   
    calculerEtAfficherDashboard();
}


function algoChercherPourSupprimer() {
    let idSaisi = parseInt(document.getElementById("delete-search-id").value);
    let errorMsg = document.getElementById("msgErrorSuppr");
    let blocConfirmation = document.getElementById("bloc-confirmation-suppr");

    if (isNaN(idSaisi)) {
        errorMsg.innerText = "Veuillez entrer un numéro d'ID valide.";
        errorMsg.style.display = "block";
        blocConfirmation.style.display = "none";
        return;
    }

    let articleTrouve = null;


    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === idSaisi && produits[i].etat === 1) {
            articleTrouve = produits[i];
            break;
        }
    }

    if (articleTrouve !== null) {
       
        errorMsg.style.display = "none";
        
     
        document.getElementById("delete-id").value = articleTrouve.id;
        document.getElementById("delete-info-nom").innerText = articleTrouve.nom;
        document.getElementById("delete-info-cat").innerText = articleTrouve.categorie;
        document.getElementById("delete-info-qte").innerText = articleTrouve.quantite;

       
        blocConfirmation.style.display = "block";
    } else {
    
        errorMsg.innerText = "Aucun produit actif ne possède l'ID " + idSaisi;
        errorMsg.style.display = "block";
        blocConfirmation.style.display = "none";
    }
}

function algoConfirmerSuppression() {
    let idASupprimer = parseInt(document.getElementById("delete-id").value);

   
    for (let i = 0; i < produits.length; i++) {
        if (produits[i].id === idASupprimer) {

            produits[i].etat = 0; 
            alert("Le produit '" + produits[i].nom + "' a bien été retiré de la vente.");
            break;
        }
    }
    document.getElementById("bloc-confirmation-suppr").style.display = "none";
    document.getElementById("delete-search-id").value = "";

   
    calculerEtAfficherDashboard();
}



function algoListerProduits() {
    let corpsTableau = document.getElementById("tbodyInventaire");
    

    corpsTableau.innerHTML = "";

    let compteurArticles = 0;

    for (let i = 0; i < produits.length; i++) {
        let p = produits[i];

        
        if (p.etat === 1) {
            compteurArticles++;

           
            let ligneHtml = `
                <tr style="border-bottom: 1px solid rgba(63, 141, 235, 0.1);">
                    <td style="padding: 12px; font-weight: bold; color: gray;">${p.id}</td>
                    <td style="padding: 12px;"><img src="${p.image}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 6px;"></td>
                    <td style="padding: 12px; font-weight: bold; color: var(--texteSecondaire);">${p.nom}</td>
                    <td style="padding: 12px; color: #7f8c8d;">${p.categorie}</td>
                    <td style="padding: 12px; font-weight: 800; color: var(--texte);">$ ${p.prix.toFixed(2)}</td>
                    <td style="padding: 12px; font-weight: bold;">${p.quantite} u</td>
                </tr>
            `;
            corpsTableau.innerHTML += ligneHtml;
        }
    }

  
    if (compteurArticles === 0) {
        corpsTableau.innerHTML = `<tr><td colspan="6" style="text-align:center; padding: 20px; color: gray;">Aucun produit en stock actuellement.</td></tr>`;
    }
}



showAdminSection('adminDashboard'); 
