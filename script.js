// define elements

let price = document.getElementById("priceRange"); //prcie range bar
let search = document.getElementById("search"); // search bar
let load = document.getElementById("load"); // load more button
let accdatas = document.getElementById("accdata"); // load more button for account data
let notfound = document.getElementById("notfound"); // not found image
let card = document.getElementById("card"); // card whare data load
let lodingAnimtion = document.getElementById("loading-animation"); // loading Animtion When Searching data 
let notfoundpng = document.getElementById("notfoundpng"); // not found image 
let timeoutId; // timoutid 


let newdata = [] // to show data when search new data array
let accdata = []  // to sore account info i use this data array

// all data 

let data = [
    {
        name: '📛MI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'evt',
        ammount: '4000',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛I POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'srv',
        ammount: '4000',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛GGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        ammount: '4000',
        category: 'srv',
        status: 'ava',
        tyepeis: "buy",
        video: "video/gt.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        ammount: '4000',
        category: 'acc',
        status: 'ava',
        tyepeis: "join",
        video: "video/gt.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p4.jpg',
        category: 'acc',
        ammount: '40',
        status: 'sold',
        tyepeis: "join",
        video: "video/gt.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛 POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'srv',
        ammount: '40',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI PULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '40',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'images/p.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis: "buy",
        video: "video/x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    }
]



let n = 3;

gta(data); // data to show on page

// data for account

function acc(elem) {    
    document.getElementById("card").innerText = "";
    for (let i = 0; i < n; i++) {
        document.getElementById("card").innerHTML += `
     <div class="project" data-aos="zoom-in" id="${i}">
   

     <div class="image">
    
<img src="${elem[i].image1}">
         <video preload="none" controls onclick="this.play()" poster="${elem[i].image1}" id="video">
         <source src="${elem[i].video}" type="video/mp4">
         Your browser does not support the video tag.
       </video>
        
     </div>
     <label for="${elem[i].name}" id="title">${elem[i].name}<span>&#x3e;</span></label>
     <input type="checkbox" name="name" id="${elem[i].name}">
     <div class="content">
         <p id="des">${elem[i].description}</p>
     </div>
 
     <div class="tags">
         <p id="${elem[i].category}"></p>
         <p id="${elem[i].status}"></p>
     </div>
     <h3>₹ ${elem[i].ammount}</h3>
     <div id="buy">
     <button class="${elem[i].tyepeis}"
         onclick="window.open('${elem[i].link}')">
         </div>
     </button>
     </div>

     `
    }
}

// data for page 
function gta(elem) { 
    document.getElementById("card").innerText = "";
    for (let i = 0; i < n; i++) {
        document.getElementById("card").innerHTML += `
     <div class="project" data-aos="zoom-in" id="${i}">
     <a href="#${elem[i].image1}" id="swipe"></a>
     <a href="#${elem[i].video}" id="swiper"></a>

     <div class="image">
    
<img src="${elem[i].image1}" id="${elem[i].image1}">
         <video preload="none" controls onclick="this.play()" poster="${elem[i].image1}" id="${elem[i].video}">
         <source src="${elem[i].video}" type="video/mp4">
         Your browser does not support the video tag.
       </video>
        
     </div>
     <label for="${elem[i].name}" id="title">${elem[i].name}<span>&#x3e;</span></label>
     <input type="checkbox" name="name" id="${elem[i].name}">
     <div class="content">
         <p id="des">${elem[i].description}</p>
     </div>
 
     <div class="tags">
         <p id="${elem[i].category}"></p>
         <p id="${elem[i].status}"></p>
     </div>
     <h3>₹ ${elem[i].ammount}</h3>
     <div id="buy">
     <button class="${elem[i].tyepeis}"
         onclick="window.open('${elem[i].link}')">
         </div>
     </button>
     </div>

     `
    }
}

//  data that are not shown  

function show(elem) {
    document.getElementById("card").innerText = "";
    for (let i = 0; i < elem.length; i++) {
        document.getElementById("card").innerHTML += `
     <div class="project" data-aos="zoom-in" id="${i}">
   

     <div class="image">
    
<img src="${elem[i].image1}">
         <video preload="none" controls onclick="this.play()" poster="${elem[i].image1}" id="video">
         <source src="${elem[i].video}" type="video/mp4">
         Your browser does not support the video tag.
       </video>
        
     </div>
     <label for="${elem[i].name}" id="title">${elem[i].name}<span>&#x3e;</span></label>
     <input type="checkbox" name="name" id="${elem[i].name}">
     <div class="content">
         <p id="des">${elem[i].description}</p>
     </div>
 
     <div class="tags">
         <p id="${elem[i].category}"></p>
         <p id="${elem[i].status}"></p>
     </div>
     <h3>₹ ${elem[i].ammount}</h3>
     <div id="buy">
     <button class="${elem[i].tyepeis}"
         onclick="window.open('${elem[i].link}')">
         </div>
     </button>
     </div>

     `
    }
}

// to scroll when load more data from array

let j = 500
function gtx() {
    j += 1000
    window.scroll(0, `${j}`)
}


     
 

function loadalldata() {

    n += 3


    console.log(j)

    if (n >= data.length) {
        console.log("end")
        
    } else {

        gta(data);
        gtx();
        
    }
}



// search for data in array with name attribute 


function Searchingdata(){
   


    card.style.display = "none"
    notfound.style.display = "flex"
    lodingAnimtion.style.display = "block"
    notfoundpng.style.display = "none"
    load.style.display = "none"

    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
        searchData();
    }, 333); }// adding delay to remove lag when search 


// function to search 

function searchData() {
    notfound.style.display = "none"
    if (search.value.replace(/\s+/g, '').length == 0) {
        card.style.display = "flex"
        notfound.style.display = "none"
        lodingAnimtion.style.display = "none"
        notfoundpng.style.display = "none"
        notfound.style.display = "none";
        gta(data);
        notfound.style.display = "none"
        accdatas.style.display = "none"
        load.style.display = "block"
    } else {
        notfound.style.display = "none"
        accdatas.style.display = "none"
        load.style.display = "none"

        let text = search.value.toUpperCase();
        console.log(text)


        newdata = data.filter(function (a) {
            if (a.name.includes(text)) {
                return a.name;
            }
        });
        if (this.value == "") {
            show(data);
        }
        else {
            if (newdata == "") {
                document.getElementById("card").innerHTML = "";
                notfound.style.display = "flex";
                notfoundpng.style.display = "block"
                lodingAnimtion.style.display = "none"
            }
            else {
                card.style.display = "flex"
                notfound.style.display = "none"
                lodingAnimtion.style.display = "none"
                notfoundpng.style.display = "none"
                notfound.style.display = "none";

                show(newdata);
            }
        }
    }
}

// event to change the data according to category

document.getElementById('category').onchange = () => {
    category();
}

//function for all category ACCOUNT,SERVICE,E-SPORTS,ALL

function category() {

    if (document.getElementById('category').value == "All") {   // FOR ALL 
                                  
  window.onscroll = () => {
 if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  loadalldata()
 }
}    
        n = 3
        if (n >= data.length) {
            
            notfound.style.display = "none"
        } else {
            
            console.log(n)
        }
        gta(data);
    }

     if (document.getElementById('category').value == "Accounts") {   // FOR ACCOUNT
 

           
        let text = "acc";
        load.style.display = "none"

        newdata = data.filter(function (a) {
            if (a.category.includes(text)) {
                return a.category;
            }
        });
        if (this.value == "") {
            
        }
        else {
            if (newdata == "") {
                document.getElementById("card").innerHTML = "";
                notfound.style.display = "flex";
            }
            else {
                notfound.style.display = "none";
                accdata = newdata
                console.log(accdata.length)
window.onscroll = () => {
 if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  loadmoredata()
 }
}
                
                function loadmoredata() {

                    n += 3

                    if (n >= accdata.length) {
                        
                     
                        
                    } else {

                        acc(accdata);
                        gtx();
                        
                        console.log(n)
                    }
                }
                acc(accdata);
                notfound.style.display = "none";


            }
        }
    }

     if (document.getElementById('category').value == "Services") {   // FOR SERVICES
        load.style.display = "flex"
        accdatas.style.display = "none"
        load.style.display = "none"
        let text = "srv";


        newdata = data.filter(function (a) {
            if (a.category.includes(text)) {
                return a.category;
            }
        });
        if (this.value == "") {
            show(data);
        }
        else {
            if (newdata == "") {
                document.getElementById("card").innerHTML = "";
                notfound.style.display = "flex";
            }
            else {
                n = newdata.length
                if (n >= newdata.length) {
                    load.style.display = "none"
                    notfound.style.display = "none"
                    show(newdata);
                } else {
                    show(newdata);
                    load.style.display = "flex"
                    console.log(n)
                }
                show(newdata);
                notfound.style.display = "none";
            }
        }
    }

     if (document.getElementById('category').value == "E-Sports") {    // FOR E-SPORTS
        load.style.display = "flex"
        accdatas.style.display = "none"
        let text = "evt"



        newdata = data.filter(function (a) {
            if (a.category.includes(text)) {
                return a.category;
            }
        });
        if (this.value == "") {
            show(data);
        }
        else {
            if (newdata == "") {
                document.getElementById("card").innerHTML = "";
                notfound.style.display = "flex";
            }
            else {
                n = newdata.length
                if (n >= newdata.length) {
                    load.style.display = "none"
                    notfound.style.display = "none"
                    show(newdata);
                } else {
                    show(newdata);
                    load.style.display = "flex"
                    console.log(n)
                }
                show(newdata);
                notfound.style.display = "none";
            }
        }
    }
}

price.onchange = () => console.log(price.value)


// getting high an low price 
let low = 0;
let high = 0;

price.onclick= () => {
    finMinMax();
      // console to see price 
 
    
}

// function to get Min and Max Price

function finMinMax() {
    
    const priceList = data.map((product) => product.ammount);
    const minPrice = Math.min(...priceList);
    const maxPrice = Math.max(...priceList);
    price.min = minPrice;
    price.max = maxPrice;
}

finMinMax()


price.oninput = (e)=> {console.log(price.value)
 

    gta(data.filter((product) => product.ammount <= e.target.value));
   
}






