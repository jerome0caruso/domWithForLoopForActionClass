const menuItems = document.querySelectorAll(".nav-link");

const loopOverTheMenu =(e)=> {
    document.querySelector('.active').classList.toggle('active');
    e.target.className = 'active'; 
    console.log(e.target.id)
}

 menuItems.forEach(menu => {
     return menu.addEventListener('click', loopOverTheMenu);
     
 });

 /*
 const menuItems = document.getElementsByClassName("nav-link");
 const LEN = menuItems.length;

 for(let i = 0; i < LEN; i++){
     const menuItem = menuItems[i];
     console.log(menuItem)

     menuItem.onclick = function() {
         for(let j = 0; j < LEN; j++){
             console.log("J", j)
             menuItems[j].classList.remove("active");
         }
        menuItem.classList.add("active");
        console.log(menuItem.innerHTML); 
     };
 }
 */