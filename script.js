const inputElement = document.querySelector("input");
const buttonElement = document.querySelector("button");
const ulElement = document.querySelector("ul");

const tasks = []

buttonElement.onclick = ev => {

    ev.preventDefault();

    if (inputElement.value){
        
        //console.log (inputElement.value);
        
        // tasks.push(inputElement.value);
        // inputElement.value="";
        // console.log(tasks);

        const liElement = document.createElement("li")
        liElement.innerHTML = `<span>${inputElement.value}</span>`;
        ulElement.appendChild(liElement);
        inputElement.value = "";



    }




};