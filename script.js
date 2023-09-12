let data=[
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        tag: 'available',
        ammount: '₹ 3,499',
        id: 'first',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        tag: 'available',
        ammount: '₹ 3,499',
        id: 'second',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        tag: 'available',
        id: 'third',
        ammount: '₹ 3,499',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        tag: 'available',
        id: 'fourth',
        ammount: '₹ 3,499',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    }
]

clutter="";
data.forEach(function(elem){
    clutter +=`
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
        <p id="sold">${elem.tag}</p>
    </div>
    <h3>₹ 3,499</h3>
    <div class="icon"
        onclick="window.open('${elem.link}')">
    </div>
    </div>
    `

})


document.querySelector("#card").innerHTML = clutter