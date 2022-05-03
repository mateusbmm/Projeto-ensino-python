
const container = document.querySelector(".container")
const header = document.querySelector("header");
const footer = document.querySelector("footer");
const nav_button = document.querySelector(".nav-button");
const nav_menu = document.querySelector(".nav-menu");


window.addEventListener('load', () => {
    
    if(window.screen.width <= 800){
       
        container.classList.add("mobile");
        nav_menu.classList.add("desactive");
        header.classList.add("mobile");
        footer.classList.add("mobile");
        
 
     } else{

        container.classList.remove("mobile");
        nav_menu.classList.add("desactive");
        header.classList.remove("mobile");
        footer.classList.remove("mobile"); 
        
     }
});

window.addEventListener('resize', () => {
    if(window.screen.width <= 800){
       
        container.classList.add("mobile");
        header.classList.add("mobile");
        footer.classList.add("mobile");
        
 
     } else{
        container.classList.remove("mobile");
        header.classList.remove("mobile");
        footer.classList.remove("mobile"); 
        
     }

})


nav_button.addEventListener("click", ()=>{

    if(nav_menu.classList.contains("desactive")){
        nav_menu.classList.remove("desactive");
        nav_button.innerHTML = `<span class="material-symbols-outlined">
        close
        </span>`;
      
        
    }else{
        nav_menu.classList.add("desactive");
        nav_button.innerHTML = `<span class="material-symbols-outlined">
        menu
        </span>`;
        
    }

})
