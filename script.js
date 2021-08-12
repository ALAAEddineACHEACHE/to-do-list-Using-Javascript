const items = [];
let cpt=localStorage.length;

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');

addItems.addEventListener("submit",function(event){
 event.preventDefault();

 let element =document.createElement("li"); 
element.textContent = document.getElementById("text").value; 
 itemsList.appendChild(element)
 localStorage.setItem(cpt,document.getElementById("text").value);
 cpt++;
});


for(i=0;i<localStorage.length;i++){
 localStorage.getItem(i);
 let element2 =document.createElement("li");
 element2.textContent=localStorage.getItem(i);
 itemsList.appendChild(element2);
 }