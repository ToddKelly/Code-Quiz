//results variables
var clearbtn = document.querySelector("#clear");
var submitbtn = document.querySelector("#submit");
var results = document.querySelector("#results");
var list = document.querySelector("#list");
var final = document.getElementById('final')
var first = document.querySelector("#number1")
var second = document.querySelector("#number2")

function last(){
    var username = localStorage.getItem('name1');
    var topresults = localStorage.getItem('results')

    number1.textContent=username
    number2.textContent=topresults
}
last()
// add results to local storage

submitbtn.addEventListener("click",function(){
    
     var name1 = document.querySelector("#name").value;
    if (name1 === null){
        alert ("name not entered");
    }
    else {
     localStorage.setItem("name1",name1);}
     var li1 = document.createElement("li");
     var li2 = document.createElement("li");
     li1.textContent=localStorage.getItem('name1')
     li2.textContent=localStorage.getItem('results')
     list.appendChild(li1)
     list.appendChild(li2)
  
   
});
 
// clear local storage

clearbtn.addEventListener("click", function(){

 localStorage.clear();

});