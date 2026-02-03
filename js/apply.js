// JS spécifique page candidature

document.addEventListener("DOMContentLoaded", function () {
    console.log("Page candidature chargée");

    // Exemple message sécurité
    const formLink = document.querySelector(".btn");
    if (formLink) {
        formLink.addEventListener("click", () => {
            alert(
                "Vous allez être redirigé vers le formulaire sécurisé de dépôt de candidature."
            );
        });
    }
});