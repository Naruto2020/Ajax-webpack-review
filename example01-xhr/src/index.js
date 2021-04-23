// Dom 
const button = document.querySelector("button");
const ol = document.querySelector("ol");

// config  request 
const url = "https://jsonplaceholder.typicode.com/posts";
const methode = "GET"; 

// create request 
let requete = new XMLHttpRequest(); // xhr 

// settings events 
button.addEventListener("click", ()=>{
    // init rquest 
    requete.open(methode, url);

    // send request 
    requete.send();
});

// follow state request 
requete.onreadystatechange = function () {
    console.log(requete.readyState);
};

// load up and display response 
requete.onload = () =>{
    // else/if statement to check and catch errors 
    if(requete.status >= 200 && requete.status < 400){
        let publications = JSON.parse(requete.responseText);

        // set empty ol list before filling it
        ol.innerHTML = "";
        // filling the list
        for(let pub of publications){
            let li = document.createElement("li");
            li.innerHTML = 
            `<h2> ${pub.title}</h2>
            <p> ${pub.body} </p>
            `
            ol.appendChild(li);
        }
    }

    // catch error  (4xx client && 5xx server)
    if(requete.status >= 400){
        console.log("une erreur c'est produite");
    }
};

// catch other error 
requete.onerror = () => {
    console.log(
      "Cet événement se déclenche dans le cas où l'envoi de la requête a échoué."
    );
};
  