window.onscroll = () => {

    if (window.scrollY > 80) {
        Header.classList.add("active");
    } else {
        Header.classList.remove("active");
    }
  };
  window.onload = () => {
    if (window.scrollY > 80) {
        Header.classList.add("active");
    } else {
        Header.classList.remove("active");
    }
  };
  function Take(id){
    form.style.display="flex"
    if(id=="Room"){
        document.getElementById("imgTake").setAttribute("src","/IMG/Rooms.png") 
        Tittle.innerText ="Room"        
    }
    if(id=="Valli"){
        document.getElementById("imgTake").setAttribute("src", "/IMG/valli.png")
        Tittle.innerText ="Valli" 
    }
    if(id=="Sweet"){
        document.getElementById("imgTake").setAttribute("src","/IMG/Sweet.png") 
        Tittle.innerText ="Sweet" 
    }
  }
  function closeF() {
    form.style.display="none"
  }