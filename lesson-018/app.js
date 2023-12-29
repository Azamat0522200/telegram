const contaner = document.querySelector(".container");
const chevronbox = document.querySelector("#chevron-box");
const menuitem = document.querySelector("#menu-item");
const navbarbox = document.querySelector(".navbar-box");
const solid = document.querySelector(".solid");
const lockopen = document.querySelector("#lock-open");
const fasolid = document.querySelector("#fa-solid");
const search = document.querySelector(".search");
const left = document.querySelector("#left");
const lefts = document.querySelector("#lefts");
const sozlamala = document.querySelector(".sozlamala");
const sozlamalarkirish = document.querySelector(".sozlamalarkirish");
const hikoya1 = document.querySelector(".hikoya1");
const hikoya2 = document.querySelector(".hikoya2");
const hikoya3 = document.querySelector(".hikoya3");
const story = document.querySelector(".story");
const story1 = document.querySelector(".story1");
const story2 = document.querySelector(".story2");
const story3 = document.querySelector(".story3");

hikoya1.addEventListener("click",() =>{
    story.style.display = "block";
})
hikoya2.addEventListener("click",() =>{
    story1.style.display = "block";
})
hikoya3.addEventListener("click",() =>{
    story2.style.display = "block";
})
hikoya2.addEventListener("click",() =>{
    story3.style.display = "block";
})
fasolid.addEventListener("click",() =>{
    search.style.display = "block";
})
sozlamala.addEventListener("click",() =>{
    sozlamalarkirish.style.display = "block";
    navbarbox.style.display = "none"
})
lefts.addEventListener("click",() =>{
    sozlamalarkirish.style.display = "none";
})
left.addEventListener("click",() =>{
    search.style.display = "none";
})
chevronbox.addEventListener("click",() =>{
    navbarbox.style.display = "none";
})

lockopen.addEventListener("click", () =>{
    solid.style.display = "block"
})

menuitem.addEventListener("click",() =>{
    navbarbox.style.display = "block";
})
chevronbox.addEventListener("click",() =>{
    navbarbox.style.display = "none";
})


const todolistLi = document.createElement('li');
    const p = document.createElement('p');
    const div = document.createElement('div');
    div.innerHTML =  `<span>${correctTime(chislo.getHours(), chislo.getMinutes())}</span><i class="fas fa-edit"></i> <i class="fas fa-check-circle"></i><i class="fas fa-trash"></i>`
    p.innerHTML = input.value;
    todolistLi.appendChild(p);
    todolistLi.appendChild(div)
    todolistLi.className = "collection_item";
    collection.appendChild(todolistLi);
    console.log(input.value);
    input.value = '';






