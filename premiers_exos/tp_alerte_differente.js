// tp alerte différente en fonctionde la reponse a confirm

let question = "voulez vous confirmer ?";
let result = confirm(question);
if (result == true){
    alert('vous avez confirmé !');
} else {
    alert('vous refusez')
}
