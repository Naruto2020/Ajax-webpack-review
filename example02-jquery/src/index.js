import $ from "jquery";
//$(document).ready(function(){  ---> (use this without webpack )
    // DOM 
    
    const article = document.querySelector("article");
    const ul = document.querySelector("ul");
    
    // request config 
    const urlListe = "https://swapi.dev/api/people/";
    const methode = "GET";

    // create request 
    $.ajax({
        url: urlListe, // where i send my request 
        methode: methode, // how i send it 
        dataType: "json",  // which files i expect 
        success: function(data, textStatus, jqXHR){
          //console.log("jqXHR", jqXHR);
          console.log("textStatus", textStatus);
          console.log("data", data);

          // create people 
          let actors = data.results;

          // set empty ol list before filling it
          ul.innerHTML = "";

          // filling the list
          for(let i=0; i< actors.length; i++){
            let acter = actors[i];
            let li = document.createElement("li");
            li.innerHTML = `
            <a href="#"> ${acter.name} </a>
            `
            ul.appendChild(li);

            // Construction of the url corresponding to current acter
            const acterId = i+1; // actors id  in swapi start at 1 (not at 0 as in our array)
            const acterUrl = urlListe + acterId + "/";
            // create request if events 
            li.addEventListener("mouseover", ()=>{
                $.ajax({
                    url: acterUrl,
                    methode:methode,
                    dataType:"json",
                    success:function(data, textStatus, jqXHR){
                        //console.log("data", data);
                        //filling the article 

                        article.innerHTML = `
                        <h2> ${data.name} </h2>
                        <ul>
                           <li> genre: ${data.gender}</li>
                           <li>cheuveux: ${data.hair_color} </li>
                           <li>poid: ${data.mas}</li>
                           <li>taille: ${data.height} </li>
                        </ul>
                        `
                    }
                });
            });
          }
        }
    });

//});