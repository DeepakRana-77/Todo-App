let inp = document.querySelector("input");
let btn = document.querySelector("#add");
let ul = document.querySelector("ul");

btn.addEventListener("click",function (){
    let li = document.createElement("li");
    li.innerText = inp.value;
    li.classList.add("list");
    ul.appendChild(li);


    let delBtn = document.createElement("button");
    delBtn.innerText = "Delete Task";
    delBtn.classList.add("delete");
    li.append(delBtn);
})

ul.addEventListener("click",function(event) {
        if(event.target.nodeName == "BUTTON"){
            let listItem = event.target.parentElement;
            listItem.remove();
        }
      
    })