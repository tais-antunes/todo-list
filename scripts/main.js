var ul = document.getElementById("myList");
var li;
var itemId;
var item;

function addTask() {
         //recebe o elemento que vem da caixa de texto com o id="task"
     if(document.getElementById("task").value != "") { 
         item = document.getElementById("task");
         itemId = ul.childElementCount;
         li = createItemEl(item.value, itemId);
         li.appendChild(createBtnRemove(itemId));
         ul.appendChild(li);
         item.value = "";
     }
}

function removeTask(itemId) {
    for(i = 0; i < ul.children.length; i++ ) {
        if(ul.children[i].getAttribute("index") == itemId) {
            
            ul.children[i].remove();
        }
    }

}

 function createItemEl(itemValue, itemId) {
    let li = document.createElement("li");
    li.setAttribute("index", itemId);
    li.appendChild(document.createTextNode(itemValue));
    return li;
}

function createBtnRemove(itemId) {
    let btn = document.createElement("button");
    btn.setAttribute("onclick", "removeTask("+itemId+")");
    btn.innerHTML = "Excluir";
    btn.className = "btnExcluir"
    return btn;
}