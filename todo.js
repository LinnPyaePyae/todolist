const addBtn = document.querySelector('#addBtn');
const inputText = document.querySelector('#inputText');
const ulList = document.querySelector('#ulList');

const createLi = (text) => {
    const li = document.createElement('li');
    li.className = "list-group-item border-dark d-flex justify-content-between";
    li.innerHTML = `<div class="form-check">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label class="form-check-label text-label" for="flexCheckDefault">${text}</label>
</div>
<div class="btn-group">
    <button onclick="del(event)" class="btn btn-sm btn-outline-dark"><i class="fas fa-trash pe-none"></i></button>
    <button onclick="edit(event)" class="btn btn-sm btn-outline-dark" ><i class="fas fa-pen"></i></button>
</div>`;
    return li;
};


const del = (event) => {
    console.dir(event.target);
    // if (confirm('Are you sure to delete?')) {
    //     event.target.parentElement.parentElement.remove();

    // }
};

const edit = (event) => {
    const currentElement = event.target.parentElement.parentElement.querySelector('.text-label');
    let newText = prompt('New Text to update', currentElement.innerText);
    currentElement.innerText = newText;
}

addBtn.addEventListener('click', () => {
    // console.log(inputText.value);
    ulList.append(createLi(inputText.value));
    inputText.value = null;
});