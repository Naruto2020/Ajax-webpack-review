import {maPromesse1} from './promesse';

// Exemple promesse basique

console.log(maPromesse1);
maPromesse1
  .then((valeurSucces)=>{
      console.log("promesse resolut avec succes  : ", valeurSucces);
  })
  .catch((valeurRejet)=>{
      console.log("promesse rejetée : ", valeurRejet);
  });

  // Exemple de chaînage de promesses
maPromesse1
.then((valeurDeSuccesPromesse1) => {
  console.log("valeurDeSuccesPromesse1", valeurDeSuccesPromesse1);
  return 3;
})
.then((valeurDeSuccesPromesse2) => {
  console.log("valeurDeSuccesPromesse2", valeurDeSuccesPromesse2);
  return 6; // va devenir la valeur de résolution de la promesse renvoyée par la méthode .then() (ici : promesse3)
})
.then((valeurDeSuccesPromesse3) => {
  console.log("valeurDeSuccesPromesse3", valeurDeSuccesPromesse3);
  const unePromesseObtenueParRequeteFetch = new Promise((resolve, reject) => {
    resolve(3);
  });

  console.log(unePromesseObtenueParRequeteFetch);
  // Pas de
  //return 9
  return unePromesseObtenueParRequeteFetch;
})
// Renvoyer une promesse depuis une méthode .then() donne accès à sa valeur de résolution dans l'appel à la méthode .then() suivante
.then((valeurDeSuccesPromesse4) => {
  console.log("valeurDeSuccesPromesse4", valeurDeSuccesPromesse4);
});


// Exemple fetch
// DOM 
const button = document.querySelector("button");
const ol = document.querySelector("ol");

// request config 
const url = "https://swapi.dev/api/films";
const methode = "GET";

// listening Dom events and create request 
button.addEventListener("click", ()=>{

    // fetch permet de faire une requête AJAX.
    // L'appel à fetch retourne un objet de type Promise.
    const promesseDeFilms = fetch(url, {method:methode});

    // chainage de la promese de films 
    promesseDeFilms
      .then(response =>{
          //const body = response.body;
          //const status = response.status;
          const {body, status} = response  // afectation par décomposition 

          if(status >= 200 && status < 300){
            console.log(body); // ReadableStream
            const promesseDeData = response.json();
            console.log("promesse de films :", promesseDeData);
            return promesseDeData // promessDeData est la valeur de resolution de la promesse de films qui sera exploitable dans le prochain appel then 
          }
       })
       .then(data =>{
           const results = data.results;
           console.log("data:",results);
           // on vide la liste avant chaque remplissage 
           ol.innerHTML = "";
           // on remplit la liste 
           results.forEach(film => {
               const {title, episode_id, release_date} = film;
               let li = document.createElement("li");
               li.innerHTML = `${title}, episode : ${episode_id}, année :  ${release_date} <br/> <br/>`;
               ol.appendChild(li);
           });
       })
       .catch((erreur) => {
        console.log("ERREUR", erreur);
      });
});