
function showAdminSection(idSection) {
    let toutesLesSections = document.querySelectorAll('.view');

    for (let i = 0; i < toutesLesSections.length; i++) {
        toutesLesSections[i].style.display = 'none';
    }

    let sectionAVisualiser = document.getElementById(idSection);
    if (sectionAVisualiser) {
        sectionAVisualiser.style.display = 'block';
    }
   
}