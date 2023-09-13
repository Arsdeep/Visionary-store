let price = document.getElementById("priceRange");
let search = document.getElementById("search");
let load = document.getElementById("load");
let accdatas = document.getElementById("accdata");
let notfound = document.getElementById("notfound");
let card = document.getElementById("card");

let newdata = []
let accdata = []

let data = [
    {
        name: '📛MI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'evt',
        ammount: '4000',
        status: 'ava',
        tyepeis:"buy",
        video:"x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛I POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'srv',
        ammount: '4000',
        status: 'ava',
        tyepeis:"buy",
        video:"x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛GGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        ammount: '4000',
        category: 'srv',
        status: 'ava',
        tyepeis:"buy",
        video:"gt.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        ammount: '4000',
        category: 'acc',
        status: 'ava',
        tyepeis:"join",
        video:"gt.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'acc',
        ammount: '40',
        status: 'sold',
        tyepeis:"join",
        video:"gt.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛 POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'srv',
        ammount: '40',
        status: 'ava',
        tyepeis:"buy",
        video:"x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI PULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'acc',
        ammount: '40',
        status: 'ava',
        tyepeis:"buy",
        video:"x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGMI POARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis:"buy",
        video:"x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULAITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'acc',
        ammount: '3499',
        status: 'ava',
        tyepeis:"buy",
        video:"x.mp4",
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    }
]



let n=3;

gta(data);

function acc(elem){
    document.getElementById("card").innerText="";
    for ( let i=0; i<n; i++){
     document.getElementById("card").innerHTML +=`
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
 


function gta(elem){
    document.getElementById("card").innerText="";
    for ( let i=0; i<n; i++){
     document.getElementById("card").innerHTML +=`
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

function show(elem){
    document.getElementById("card").innerText="";
    for ( let i=0; i<elem.length; i++){
     document.getElementById("card").innerHTML +=`
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


let j= 0

 
load.onclick = () => {

    n+=3
    
    j+=500
  console.log(j)

    if(n>=data.length){
        load.style.display="none"
        notfound.style.display="none"
        gta(data);
    }else{
       
        gta(data);
        window.scroll(0,`${j}`)
        load.style.display="block"
        notfound.style.display="none"
    }
}
 



 search.onkeyup = () =>{
    notfound.style.display="none"
    if (search.value.replace(/\s+/g, '').length == 0){
        gta(data);
        notfound.style.display="none"
        accdatas.style.display="none"
        load.style.display="block"
    }else{
        notfound.style.display="none"
        accdatas.style.display="none"
        load.style.display="none"
    
    let text = search.value.toUpperCase();
    console.log(text)

    
    newdata = data.filter(function(a){
        if(a.name.includes(text)){
            return a.name;
        }
    });
    if(this.value == ""){
       
        show(data);
    }
    else {
        if(newdata==""){
            document.getElementById("card").innerHTML="";
            notfound.style.display="flex";
        }
        else{
            notfound.style.display="none";
            show(newdata);
        }
    }
}
}

document.getElementById('category').onchange = ()=>{
    category();
}

function category(){

    if(document.getElementById('category').value=="All"){
        load.style.display="flex"
        accdatas.style.display="none"
        n=3
        if(n>=data.length){
            load.style.display="none"
            notfound.style.display="none"   
        }else{
            load.style.display="flex"
        console.log(n)}
        gta(data);
    }
    
if(document.getElementById('category').value=="Accounts") {
let text = "acc";
load.style.display="none"

newdata = data.filter(function(a){
    if(a.category.includes(text)){
        return a.category;
    }
});
if(this.value == ""){
    show(data);
}
else {
    if(newdata==""){
        document.getElementById("card").innerHTML="";
        notfound.style.display="flex";
    }
    else{
        notfound.style.display="none";
        accdata = newdata
       console.log(accdata.length)
       
      accdatas.style.display="flex"
       accdatas.onclick = () => {

        n+=3
       
        if(n>=accdata.length){
            accdatas.style.display="none"
            notfound.style.display="none"
            acc(accdata);
        }else{
            acc(accdata);
            accdatas.style.display="flex"
        console.log(n)}
    }
    acc(accdata);
     notfound.style.display="none";
     
      
    }
}
}

if(document.getElementById('category').value=="Services"){
    load.style.display="flex"
    accdatas.style.display="none"
    load.style.display="none"
let text = "srv";


newdata = data.filter(function(a){
    if(a.category.includes(text)){
        return a.category;
    }
});
if(this.value == ""){
    show(data);
}
else {
    if(newdata==""){
        document.getElementById("card").innerHTML="";
        notfound.style.display="flex";
    }
    else{
        n=newdata.length
        if(n>=newdata.length){
            load.style.display="none"
            notfound.style.display="none"
            show(newdata);
        }else{
            show(newdata);
            load.style.display="flex"
        console.log(n)}
        show(newdata);
        notfound.style.display="none";
    }
}
}

if(document.getElementById('category').value=="E-Sports"){
    load.style.display="flex"
    accdatas.style.display="none"
let text = "evt"



newdata = data.filter(function(a){
    if(a.category.includes(text)){
        return a.category;
    }
});
if(this.value == ""){
    show(data);
}
else {
    if(newdata==""){
        document.getElementById("card").innerHTML="";
        notfound.style.display="flex";
    }
    else{
        n=newdata.length
        if(n>=newdata.length){
            load.style.display="none"
            notfound.style.display="none"
            show(newdata);
        }else{
            show(newdata);
            load.style.display="flex"
        console.log(n)}
        show(newdata);
        notfound.style.display="none";
    }
}
}
}

price.onchange = () => console.log(price.value)




low = data.sort(function(a,b){return a.ammount - b.ammount})

high = data.sort(function(a,b){return b.ammount - a.ammount});

