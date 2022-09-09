let url = "https://api.openweathermap.org/data/2.5/weather?appid=a4ecf005e4d3e3fb3fb7afb4fd1688c3&units=metric&q=";

function getData(url, ville) {
    fetch(url + ville)
    .then(function(response){
        if(response.ok){
            return Promise.resolve(response.json());
        }else{
            return Promise.reject(new Error("Erreur dans la requete"))
        }
    }).then((data)=>{
        console.log(data);
        afficherMeteo(data);

    }).catch(function(e){
        console.log(e);
    });
}

let nomVille = document.querySelector(".nomVille");
let humidite = document.querySelector(".humidite");
let temp = document.querySelector(".temp");
let inputVille = document.querySelector(".inputVille");
let date = document.querySelector(".date");

function afficherMeteo(objMeteo) {
    nomVille.textContent = "À " + objMeteo.name + " : ";
    humidite.textContent = "il y a " + objMeteo.main.humidity + "% d'humidité";
    temp.textContent = "et  il fait : " + objMeteo.main.temp + " °C";
}

let boutonAjouter = document.querySelector(".boutonAjouter");
boutonAjouter.addEventListener("click" , function () {
    let ville = inputVille.value;
    getData(url, ville);
    let dateActuelle = new Date().toLocaleDateString(navigator.language, {
        day: "numeric",
        year: "numeric",
        month: "long",
        weekday: "long",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
    });
    date.textContent = "le " + dateActuelle;
});
