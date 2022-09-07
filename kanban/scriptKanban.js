class DragableNote{
    constructor(noteTitle, noteContent, id) {
        this.id = id;
        this.noteTitle = noteTitle;
        this.noteContent = noteContent;
        this.noteTime = Date.now();
    }

    creeCarte() {
        let div = document.createElement("div");
        let h2Title = document.createElement("h2");
        let pContent = document.createElement("p");
        let ptime = document.createElement("p");
    
        h2Title.textContent = this.noteTitle;
        pContent.textContent = this.noteContent;
        ptime.textContent = this.noteTime;
    
        div.classList.add("note");
        div.setAttribute("draggable", "true");
        div.setAttribute("id", this.id);
        let todo = document.querySelector(".todo");
    
        todo.append(div);
        div.append(h2Title);
        div.append(pContent);
        div.append(ptime);
    
    }
}

let bouton = document.querySelector("button");
let inputTitle = document.querySelector(".titleOfNote");
let inputContent = document.querySelector(".contentOfNote");
let compteurId = 1;

bouton.addEventListener("click", function () {
    let nvNote = new DragableNote(inputTitle.value, inputContent.value, compteurId);
    console.log(nvNote);
    nvNote.creeCarte();
    compteurId++;
});

function start(e) {
    e.dataTransfer.effectAllowed="move";
    e.dataTransfer.setData("text", e.target.getAttribute("id"));
}

function over(e) {
    return false;
}

function drop(e) {
    ob=e.dataTransfer.getData("text");
    e.currentTarget.appendChild(document.getElementById(ob));
    e.stopPropagation();
    return false;
}

function deleteDrop(e) {
    ob=e.dataTransfer.getData("text");
    document.getElementById(ob).remove();
    e.stopPropagation();
    return false;
}

