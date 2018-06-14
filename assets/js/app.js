const boton = document.getElementById("btnDisable")
boton.disabled = true;

const inputCaracteresC = document.getElementById("count");
inputCaracteresC.innerText = 140;

function  tecla() {
    //Activar el boton cuando se esta escribiendo algo
    boton.disabled = false;
    boton.className= "btnEnable";
    
    //Redimensionar el text area
    const commentTextArea = document.getElementById("comment");
    commentTextArea.style.height = commentTextArea.scrollHeight + "px";
    
    //Conteo de caracteres regresivo
    const countRegresiva = 140 - (document.getElementById("comment").value.length + 1);
    const inputCaracteresC = document.getElementById("count");
    inputCaracteresC.innerText = countRegresiva;

    if (countRegresiva > 20) {
        inputCaracteresC.classList.add("count");
    }
    if(countRegresiva <= 20)
    {
        inputCaracteresC.classList.add("twoCount");
    }
    if (countRegresiva <= 10) {
        inputCaracteresC.classList.add("treeCount");
    }
    if (countRegresiva < 0 || commentTextArea.value === "") {
        boton.disabled = true; 
        boton.className = "btnDisable";
    }
    
}

boton.addEventListener("click", () => {

    //Reestableciendo las propiedades cuando da click, "limpiando"
    boton.disabled = true;
    inputCaracteresC.innerText = 140;
    boton.className = "btnDisable";
    const comment = document.getElementById("comment").value;
    document.getElementById("comment").value = "";

    const cont = document.getElementById("cont");

    const newComments = document.createElement("div");

    const heart = document.createElement("i");
    heart.classList.add("fa", "fa-heart", "heart");

    const trash = document.createElement("i");
    trash.classList.add("fa", "fa-trash", "trash");

    const contenedorElemento =  document.createElement("p");
    let textNewComment = document.createTextNode(comment);

    let data = new Date();
    let hour = data.getHours() + ": " + data.getMinutes();
    const contenedorData = document.createElement("span");
    let dataText = document.createTextNode(hour);
    
    contenedorData.appendChild(dataText);
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(heart);
    newComments.appendChild(contenedorData);
    newComments.appendChild(trash);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);

    heart.addEventListener("click", ()=>{
        heart.classList.toggle("red");
    });
    trash.addEventListener("click", () => {
       cont.removeChild(newComments);
    });
    
})