let themeClair = true;

function changerTheme() {
    themeClair = !themeClair;
    if (themeClair === true) {
        document.body.setAttribute('data-theme', 'light');
    } else {
        document.body.setAttribute('data-theme', 'dark');
    }
}
let mobileMenuBtn = document.getElementById('mobileMenu');
let navMenu = document.getElementById('navMenu');

function basculerMenu() {
    navMenu.classList.toggle('active');
}

function showSection(idSection) {
    let toutesLesSections = document.querySelectorAll('.view');

    for (let i = 0; i < toutesLesSections.length; i++) {
        toutesLesSections[i].style.display = 'none';
    }

    let sectionAVisualiser = document.getElementById(idSection);
    if (sectionAVisualiser) {
        sectionAVisualiser.style.display = 'block';
    }
    navMenu.classList.remove('active');
}
mobileMenuBtn.onclick = basculerMenu;

let estConnecte = false; 
let utilisateurActuel = ""; 

// sa li m mete donnée sa yo se poum ka teste fonction se connecter ak s'inscrire yo, an apre fok  mwen delete pati sa yo
let listeUtilisateurs = [
    { utilisateur: "nano", mdp: "1234" },
    { utilisateur: "jean", mdp: "azerty" },
    { utilisateur: "joseph", mdp: "soleil" }
];

function connexion(event) {
    event.preventDefault(); 

    let nomSaisi = document.getElementById('username').value;
    let mdpSaisi = document.getElementById('password').value;
    let accesAutorise = false;
    let messageErreur = document.getElementById('loginError');
    for (let i = 0; i < listeUtilisateurs.length; i++) {
        if (listeUtilisateurs[i].utilisateur === nomSaisi && listeUtilisateurs[i].mdp === mdpSaisi) {
            accesAutorise = true;
            break; 
    }
}
    if (accesAutorise === true) {
    estConnecte = true;
    utilisateurActuel = nomSaisi;
    document.getElementById('deconnect').style.display = 'block';
    document.getElementById('connect').style.display = 'none';
    document.getElementById('titrePrincipal').style.display = 'none';
    document.getElementById('nom').innerText = nomSaisi;
    document.getElementById('titreSecondaire').style.display = 'block';
    document.getElementById('boutonPrincipal').style.display = 'none';
    document.getElementById('boutonSecondaire').style.display = 'inline-block';
    showSection('home');
}
 
    else {
        messageErreur.innerText = "Nom d'utilisateur ou mot de passe incorrect."; 
        messageErreur.style.display = 'block'; 
    }
    }

function deconnexion() {
    estConnecte = false;
    utilisateurActuel = "";
    document.getElementById('titrePrincipal').style.display = 'block';
    document.getElementById('titreSecondaire').style.display = 'none';
    
    document.getElementById('boutonPrincipal').style.display = 'inline-block';
    document.getElementById('boutonSecondaire').style.display = 'none';

    document.getElementById('deconnect').style.display = 'none';
    document.getElementById('connect').style.display = 'block';
    showSection('home');
    alert("Déconnection effectuée avec succès, on retourne à la page d'accueil");
}


    
function inscription(event) {
    event.preventDefault();

    let newUser = document.getElementById('nomUtilisateurCl').value;
    let newMdp = document.getElementById('motDePasseCl').value;
    let newMdp2 = document.getElementById('motDePasseCl2').value;
    let msgReg = document.getElementById('messageErreur');

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
    } 
    else if (newMdp !== newMdp2){
        msgReg.innerText = "Les 2 mot de passe ne correspondent pas.";
        msgReg.style.display = "block";
    }
    else {
        listeUtilisateurs.push({
            utilisateur: newUser, mdp: newMdp
        });
        alert("Inscription réussie ! Connectez-vous maintenant.");
        showSection('login');
    }
}


let produits = [
    {nom: "Produit A", prix : 800, description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit B", prix : 50, description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit C", prix : 300, description : "Lorem ipsum dolor siomnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit D", prix : 5540.15, description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit E", prix : 1500, description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit F", prix : 599.99, description : "Lorem ipsum dolor sit amet consectetur adipisiihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum! 20", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit G", prix : 1030, description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariatur magnam laborum voluptatum! Voluptatibus, harum!", image: "frontend/Assets/image1.jpeg"},
    {nom: "Produit H", prix : 499.99, description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint quibusdam omnis nihil inventore similique pariat! Voluptatibus, harum! 20", image: "frontend/Assets/image1.jpeg"}
];
let grille = document.querySelector('#productGrid');
produits.forEach(article => {
    let card = `
                <div class="card">
                    <img src="${article.image}" alt="${article.nom}">
                    <div class="cardBody">
                        <h3>${article.nom}</h3>
                        <p>${article.description}</p>                
                        <span class="price">${article.prix} $</span>
                        
                    </div>
                </div>
    `;
    grille.innerHTML += card;

})