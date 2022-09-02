// Get the modal
var modal1 = document.getElementById("myModal1");
var modal2 = document.getElementById("myModal2");
var modal3 = document.getElementById("myModal3");



// Get the button that opens the modal
var boutonCookie = document.querySelector(".boutonCookie");
var boutonMail = document.querySelector(".boutonMail");
var boutonSinscrire = document.querySelector(".boutonSinscrire");



// Get the <span> element that closes the modal
var close1 = document.getElementsByClassName("close1")[0];
var close2 = document.getElementsByClassName("close2")[0];
var close3 = document.getElementsByClassName("close3")[0];



// When the user clicks the button, open the modal
boutonCookie.onclick = function() {
    modal1.style.display = "block";
}

boutonMail.onclick = function() {
    modal2.style.display = "block";
}

boutonSinscrire.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
close1.onclick = function() {
    modal1.style.display = "none";
}

close2.onclick = function() {
    modal2.style.display = "none";
}

close3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal1) {
        modal1.style.display = "none";
    } else if (event.target == modal2) {
        modal2.style.display = "none";
    } else if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

