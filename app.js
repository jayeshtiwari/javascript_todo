
const inputBox = document.querySelector('.inputField input');
const addBtn = document.querySelector('.inputField button');
const todoList = document.querySelector('.todoList');
const deleteAllTask = document.querySelector('.footer button');

inputBox.onkeyup = () => {
    let userData = inputBox.value;
    if(userData.trim() != 0){
        addBtn.classList.add('active');
    }else{
        addBtn.classList.remove('active');
    }
}
showTask();
addBtn.onclick = () => {
    let userData = inputBox.value;
    let getlocalStorage = localStorage.getItem('New todo');
    if(getlocalStorage == null){
        var listArr = [];
    }else{
        listArr = JSON.parse(getlocalStorage);
    }
    listArr.push(userData);
    
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showTask();
}

function showTask(){
    let getlocalStorage = localStorage.getItem('New todo');
    if(getlocalStorage == null){
        var listArr = [];
    }else{
        listArr = JSON.parse(getlocalStorage);
    }
    let pendingNumber = document.querySelector('.pendingNumber');
    pendingNumber.textContent = listArr.length;
    if(listArr.length > 0){
        deleteAllTask.classList.add('active')
    }else{
        deleteAllTask.classList.remove('active')
    }
    let newLiTag = ''
    listArr.forEach((element,index) => {
        newLiTag += ` <li>${element}<span onclick="deleteItem(${index})"><i class="fas fa-trash"></i></span></li>`
    });
    todoList.innerHTML = newLiTag;
    inputBox.value = '';
}
function deleteItem(index){
    let getlocalStorage = localStorage.getItem('New todo');
    listArr = JSON.parse(getlocalStorage);
    listArr.splice(index,1);
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showTask();
}
deleteAllTask.onclick = () =>{
    listArr = [];
    localStorage.setItem("New todo",JSON.stringify(listArr));
    showTask();
}