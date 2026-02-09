/*
    1. Accessing the elements
        a. getElementById()
        b. getElementsByClassName()
        c. getElementsByTagName()
        d. querySelector()
        e. querySelectorAll()
    2. Modifying elements
        a. innerHTML
        b. innerText
        c. textContent
        d. src
        e. alt
        f. setAttribute()
        g. removeAttribute()
    3. Styling elements
        a. style
        b. classList
    4. Creating, adding, and removing elements
        a. createElement()
        b. appendChild()
        c. append()
        d. remove()
        e. removeChild()
    5. Event handlers and Event Listeners 
        
*/ 

const heading = document.getElementById('heading');

console.log(heading);

const paragraphs = document.getElementsByTagName('p');
console.log(paragraphs.length);

for (let paragraph of paragraphs) {
    console.log(paragraph);  
}

const btns = document.querySelectorAll('button.btn');

console.log(btns);


// heading.innerHTML = "Hello <span style='color: purple;'>Faithfulness</span>!";

// console.log(heading.innerHTML);

// heading.innerText = "Hello <span style='color: purple;'>FayFay</span>!";
// console.log(heading.innerText);


// console.log(heading.textContent);

// heading.textContent = "Hello <span style='color: purple;'>FayFemi</span>!";
// console.log(heading.textContent);

const img1 = document.querySelectorAll('img')[0];

console.log(img1.src);
img1.src = './assets/image-wood.jpg'
img1.alt = "Wood";

const modifiedBtn = document.getElementById("modified");

modifiedBtn.textContent = "Start Now";

modifiedBtn.setAttribute("class", "modified");

setTimeout(() => {
    modifiedBtn.removeAttribute("disabled");

}, 6000)

const body = document.body;
console.log(body);




// setInterval(() => {
//   const red = Math.floor(Math.random() * 256);
//   const green = Math.floor(Math.random() * 256);
//   const blue = Math.floor(Math.random() * 256);

//   document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
// //   console.log( `Random Color: rgb(${red}, ${green}, ${blue})\nTime Generated: ${new Date().toISOString()}`);
// }, 5000);

btns.forEach((btn) => {
    btn.classList.add("styled-btn");
})

// Creating and adding elements
const fruits = ["Apple", "Banana", "Grape", "Cashew", "Pawpaw"];

const fruitsList = document.querySelector('#fruits');

fruits.forEach((fruit) => {
    const li = document.createElement("li");

    li.textContent = fruit;

    fruitsList.appendChild(li);

    if (fruit === "Banana") {
        fruitsList.removeChild(li);
    }
})

// Event Listener
const menu = document.getElementById('menu');

const menuBtn = document.querySelector("#menu-btn");
console.log(menuBtn);
console.log(menu);


menuBtn.addEventListener('click', () => {
    menu.classList.toggle("show"); 
});

const form = document.querySelector('#myForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const firstname = document.querySelector('#firstname'); 
    const lastname = document.querySelector('#lastname'); 
    const email = document.querySelector('#email'); 
    const tel = document.querySelector('#tel'); 
    const password = document.querySelector('#password'); 
    const cPassword = document.querySelector('#cPassword'); 
    const modalWrapper = document.querySelector('#modal-wrapper'); 
    const title = document.querySelector('#title'); 
    const desc = document.querySelector('#desc'); 
    const cancel = document.querySelector('#cancel');

    cancel.addEventListener("click", () => modalWrapper.style.display = 'none');

    const message = ["Success", "Fail"]
    // Form Validation 

    if (firstname.value.trim().length < 3) {
        modalWrapper.style.display = 'flex';
        title.textContent = message[1];
        title.style.color = "red";
        desc.textContent = "First name cannot be empty or less than 3 characters!";

        setTimeout(() => {
            modalWrapper.style.display = 'none';
            firstname.focus();
        }, 5000)

    } else {
        
    }
})