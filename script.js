
let search = document.getElementById("search");

let newdata = []

let data = [
    {
        name: '📛GGMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        ammount: '₹ 3,499',
        category: 'evt',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BGI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        ammount: '₹ 3,499',
        category: 'acc',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    },
    {
        name: '📛BMI POPULARITY💠',
        description: '✅GIFTING THROUGH UID<br>✅72 HRS REQUIRED FOR GIFTING',
        image1: 'p.jpg',
        image2: 'p3.jpg',
        category: 'acc',
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
        ammount: '₹ 3,499',
        status: 'ava',
        link: 'https://wa.me/918928093361?text=%F0%9F%93%9BBGMI%20POPULARITY%F0%9F%92%A0',

    }
]




show(data);

function show(elem){
    document.getElementById("card").innerText="";
    for ( let i=0; i<elem.length; i++){
     document.getElementById("card").innerHTML +=`
     <div class="project" data-aos="zoom-in">
     <div class="image">
     
         <img src="${elem[i].image1}">
         
         <img src="${elem[i].image2}">
         <video id="gt" width="320" height="240" controls>
         <source src="gt.mp4" type="video/mp4">
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
     <h3>₹ 3,499</h3>
     <div class="icon"
         onclick="window.open('${elem[i].link}')">
     </div>
     </div>

     `
    }  
 }


 search.onkeyup = () =>{
    let text = search.value.toUpperCase();
    
    
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
        }
        else{
            show(newdata);
        }
    }
}

document.getElementById('category').onchange = ()=>{
    category();
}

function category(){

    if(document.getElementById('category').value=="All"){
        show(data);
    }
    
if(document.getElementById('category').value=="Accounts") {
let text = "acc";

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
    }
    else{
        show(newdata);
    }
}
}

if(document.getElementById('category').value=="Services"){
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
    }
    else{
        show(newdata);
    }
}
}

if(document.getElementById('category').value=="E-Sports"){
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
    }
    else{
        show(newdata);
    }
}
}
}

