var istatus=document.querySelector("#name")
var add=document.querySelector("#add")
var val=0

add.addEventListener("click",function(){
    if(val==0){
        istatus.innerHTML="friends"
        istatus.style.color="green"
        add.innerHTML="remove"

    val=1

    }
    else{
        istatus.innerHTML="Stranger"
        istatus.style.color="blue"
        add.innerHTML="Addfriendsss"

val=0
    }

})

