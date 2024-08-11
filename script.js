// console.log("Hello! from script.js");
function addContant(){
    const ul = document.getElementById("list-element")
    let li = document.createElement('li');
    let addItem  = document.querySelector('#add-text');
    let liValue = addItem.value
    let text = document.createTextNode(liValue);
    let checkbox = document.createElement("input")
    checkbox.setAttribute('type' , 'checkbox');
    li.appendChild(checkbox);
    li.appendChild(text);
    ul.appendChild(li);
    addItem.value = ""
}

function makeComplete(){
    let checkBox = document.querySelector('.checkBox');
    let checkboxParent = checkBox.parentElement;
    checkboxParent.style = 'text-decoration : line-through';
}

// const li =  document.createElement('li');
//     li.appendChild(document.createTextNode(language));
//     document.querySelector('.language').appendChild(li);