let root = document.getElementById('root');

let tempToDo = localStorage.getItem("toDoList");
let toDoList = !!tempToDo ? JSON.parse(tempToDo) : [];

let todoHeading = document.createElement('h1');
todoHeading.innerText = 'Todo';
root.appendChild(todoHeading);


let inputContainer = document.createElement("div");
inputContainer.className = "inputContainer";

let input = document.createElement('input');
input.placeholder ="Enter Your Task";
input.type ="text";
input.className ='input';

let imagebtn = document.createElement('img');
imagebtn.className ='imgbtn';
imagebtn.src ='./assets/add.png';

imagebtn.onclick =()=>{
    toDoList.push(document.querySelector('.input').value);
    localStorage.setItem ('toDoList', JSON.stringify(toDoList));
    renderList();
}

inputContainer.appendChild(input);
inputContainer.appendChild(imagebtn);
root.appendChild(inputContainer);

let toDoListContainer = document.createElement('div');
toDoListContainer.className ='toDoContainer';
root.appendChild(toDoListContainer);


const renderList =()=>{
    let toDo =``;
toDoList.forEach((i, index)=>{
    toDo += `<div class ="todoItem">
    ${index +1}: 
    <p> ${i} </p>
    <button onclick ="toDeleteHandler(${index})">Delete</button>
    <button onclick ="toEditHandler(${index})">Edit</bitton>
    </div>`
toDoListContainer.innerHTML =toDo;
});
}

const toDeleteHandler =(index)=>{
    // console.log('jkasdkj');
    toDoList.splice(index, 1);
    localStorage.setItem ('toDoList', JSON.stringify(toDoList));
    renderList();
    }

const toEditHandler =(index)=>{
    const inputFeild = document.querySelector('.input').value = toDoList[index];
    if(inputFeild){
        inputFeild.value = toDoList[index];
        toDoList.splice(index, 1)
    }
}


renderList();
