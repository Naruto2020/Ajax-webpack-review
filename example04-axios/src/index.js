import axios from 'axios';

// Dom 
const button = document.querySelector("button");
const ul = document.querySelector("ul");

// request config 
const url = "https://swapi.dev/api/films";
const methode = "GET";

// listening Dom events and create ajax request 
button.addEventListener("click", ()=>{
    axios({
            method:methode,
            url:url,
    }).then((res)=>{
        console.log(res.data.results);
        const donnees = res.data.results;
        // set empty ul list
        ul.innerHTML = "";

        donnees.forEach(film => {
            const {title, episode_id, release_date} = film
            let li = document.createElement("li");
            li.innerHTML = `${title}, épisode : ${episode_id}, date :${release_date} <br/><br/>`;
            ul.appendChild(li);
        });

    })
});