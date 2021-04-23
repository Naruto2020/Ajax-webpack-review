
console.log("this is front launch !!!");

console.log(axios);

const displayResultAjx = document.getElementById("resultats");
const displayResults = document.getElementById("resultat");
const formulaire = document.querySelector("form");

formulaire.addEventListener("submit", (event)=>{
    event.preventDefault();
    const champSaisie = document.getElementsByName("q")[0]; // input name 

    axios({ 
        method: "GET",
        url:"http://127.0.0.1:2000/api/form",
        params:{
            q:champSaisie.value
        },
    })
    .then((reponse)=>{
        const {data} = reponse;
        console.log(reponse);

        displayResults.innerHTML = data;

        // Ici, axios() retourne une promesse que l'on renvoie de la méthode .then()
        return axios({
            method:"GET",
            url: "http://127.0.0.1:2000/api/users"
        })
        .then((utilisateurs)=>{
            // utilisateurs correspond à la valeur de résolution de la (2e) promesse renvoyée par axios()
            console.log("utilisateurs", utilisateurs);
        });
    });

});