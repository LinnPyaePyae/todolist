const addbtn = document.querySelector("#addbtn");
const inputText = document.querySelector("#inputText");
const ulList = document.querySelector("#ullist");

const createLi = (text) => {
    const li = document.createElement("li");
    const dynamicId = "check" + Date.now();
    li.className = "list-group-item border-dark d-flex justify-content-between";
    li.innerHTML = `<div class="form-check">
    <input onchange="check(event)" class="form-check-input" type="checkbox" value="" id="${dynamicId}">
    <label for="${dynamicId}"  class="form-check-label text-label">${text}</label>
</div>

<div class="btn-group">

    <button onclick="del(event)" class="btn btn-outline-dark btn-sm">
        <i class="bi bi-trash3 pe-none"></i>
    </button>
    <button onclick="edit(event)" class="btn btn-outline-dark btn-sm">
        <i class="bi bi-pen pe-none"></i>
    </button>
</div>`;

    return li;
};

const check = (event) => {
    const text = event.target.nextElementSibling;
    text.classList.toggle('text-decoration-line-through');
    // const done = ulList.querySelectorAll(".text-decoration-line-through").length;
    // const currentElement = event.target.parentElement.parentElement.querySelector(".text-label");
    // currentElement.append(done);


    // console.log((ulList.querySelectorAll(":checked").length));

};

const edit = (event) => {

    // console.log(event.target.closest("li"));

    const currentElement = event.target.closest("li").querySelector(".text-label");

    let newText = prompt("New Text to Update", currentElement.innerText);
    currentElement.innerText = newText;
}


const listCounter = () => {
    const total = ulList.children.length;
    if (total) {
        listCount.innerText = "Count : " + ulList.children.length;
    } else {
        listCount.innerText = null;
    }

};

const del = (event) => {
    if (confirm("Are u sure to delete?")) {
        event.target.closest("li").remove();
        listCounter();
    }

    // console.dir(event.target);
};

const btnclick = () => {
    // console.log(inputText.value);
    ulList.append(createLi(inputText.value));
    inputText.value = null;
    listCounter();
}

//create p with before
const p = document.createElement("p");
p.classList.add("mt-3");
p.innerText = "Your Lists";
ulList.before(p);

// list count 
const listCount = document.createElement("p");
// listCount.innerText = 123;
listCount.classList.add("mt-3");
ulList.after(listCount);

addbtn.addEventListener("click", btnclick);

inputText.addEventListener("keyup", (event) => {
    console.log(event.key, event.keyCode);
    if (event.keyCode === 13) {
        btnclick();
    }

});





