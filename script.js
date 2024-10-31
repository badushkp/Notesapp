const notesContainer = document.querySelector('.notes-container');
const createBtn = document.querySelector('.btn');
let notes = document.querySelectorAll('.input-box');

// Get from LocalStorage when we close and restart the website
function showNotes(){
    notesContainer.innerHTML = localStorage.getItem('notes');
}

// Store in LocalStorage
function updateStoreage(){
    localStorage.setItem('notes',notesContainer.innerHTML);
}
showNotes();

//when we click on button it creates a 'p' paragraph and 'img' image.
createBtn.addEventListener('click',() =>{
    let inputBox = document.createElement('p');
    let img = document.createElement('img');
    inputBox.className="input-box";
    inputBox.setAttribute("contenteditable", "true");
    inputBox.setAttribute("spellcheck", "false");
    img.src="images/delete.png";
    notesContainer.appendChild(inputBox).appendChild(img);
})

// Delete notes when we click on the image button.
notesContainer.addEventListener('click',(e) =>{
    if(e.target.tagName ==='IMG'){
        e.target.parentNode.remove();
        updateStoreage();
    }

    // It updates on the local storage when we write update anything on the Notes.
    else if(e.target.tagName=="P"){
        notes = document.querySelectorAll(".input-box");
        notes.forEach(nt =>  {
            nt.onkeyup = function(){
                updateStoreage();
            }
        })
    }
})

// When we press Enter, it creates a new line.
document.addEventListener("keydown",event => {
    if(event.key == "Enter"){
        document.execCommand("insertLineBreak");
            event.preventDefault();
    }
})


