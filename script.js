let data = [
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        ammount: '₹ 3,499',
        category: 'evt',
        id: 'first',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        ammount: '₹ 3,499',
        category: 'acc',
        id: 'second',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'acc',
        id: 'third',
        ammount: '₹ 3,499',
        status: 'sold',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'evt',
        id: 'fourth',
        ammount: '₹ 3,499',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    }
]



data.unshift({
    name: '📛BGMIITY💠',
    description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
    image1: 'p.jpg',
    image2: 'p3.jpg',
    category: 'evt',
    id: 'five',
    ammount: '₹ 3,499',
    status: 'ava',
    link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

},
    {
        name: '📛BGMI POTY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'srv',
        id: 'six',
        ammount: '₹ 3,499',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POTY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'srv',
        id: 'seven',
        ammount: '₹ 3,499',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POTY💠',
        description: '🌟BGMI VEGETA SUIT EVENT ACCOUNT + MYTHIC FASHION + BGMI OLD RP + UPGRADABLE GUN ACCOUNT + PET ACCOUNT 🌟<br>💧ACCOUNT LEVEL - 77(HIGH)💧<br>🔥MYTHIC FASHION 52/300<br>RP - SEASON - 14, 15, 16, 17, 18, 19, M1, M2, M3 ETC MAXED💧🔥(CURRENT SEASON RP UNLOCKED)🔥💧UNIQUE DESTINY TITLE (5500 + ACHIEVEMENT POINTS)💧',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'srv',
        id: 'eight',
        ammount: '₹ 3,499',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },


);

clutter = "";
data.forEach(function (elem) {
    clutter += `
    <div class="project" data-aos="zoom-in">
    <div class="image">
    
        <img src="${elem.image1}">
        
        <img src="${elem.image2}">
       
    </div>
    <label for="${elem.id}" id="title">${elem.name}<span>&#x3e;</span></label>
    <input type="checkbox" name="name" id="${elem.id}">
    <div class="content">
        <p id="des">${elem.description}</p>
    </div>

    <div class="tags">
        <p id="${elem.category}"></p>
        <p id="${elem.status}"></p>
    </div>
    <h3>₹ 3,499</h3>
    <div class="icon"
        onclick="window.open('${elem.link}')">
    </div>
    </div>
    `

})

document.querySelector("#card").innerHTML = clutter;


let all = document.getElementById("All");
let account = document.getElementById("Acc");
let service = document.getElementById("Srv");
let event = document.getElementById("Evt");




