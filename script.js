const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');


function addTask() {

    if (inputBox.value===''){
        alert('you need to  write something');
    } 
    
    else {

        let li = document.createElement('li');

     /*   let p = document.createElement('p'); /* + */

        li.innerHTML= inputBox.value + `<p>${new Date().toDateString()}</p>` ;


        listContainer.appendChild(li);  
        
        let span = document.createElement('span');
        span.innerHTML='\u00d7';
        li.appendChild(span); 

    }
    
    inputBox.value='';
    setData ();
}

listContainer.addEventListener('click', function(e){
   

    if (e.target.tagName==='LI') {

        e.target.classList.toggle('checked');

       
        setData ();

    }

    else if (e.target.tagName==='SPAN') {

        e.target.parentElement.remove();

        setData ();

    } 
    
}, false);

function setData() {
    localStorage.setItem('data', listContainer.innerHTML);
}

function getData() {
    listContainer.innerHTML = localStorage.getItem('data');
}


getData();

// localStorage.removeItem("data");

function enter (event) {
    if (event.key==='Enter') {
        addTask();
    }
}