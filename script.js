function createPost(){
   let promptValue= prompt("what is your mind");
   
   let showPost=document.getElementById("post");
   showPost.textContent=promptValue;
   document.getElementById("post").innerHTML=promptValue;
}


function closeBox(){
    let show=document.getElementById("postDisp");
        show.style.display = "none";
    
}

function reaction(){
    let action=document.getElementsByClassName("reaction-btn")[0];
    if(action.style.color="black")
        action.style.color="blue";
    else
    action.style.color="black";
}
function myFunction(x) {
    x.classList.toggle("fa-thumbs-down");
   
   
}