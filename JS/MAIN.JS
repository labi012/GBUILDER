// menu show
const ShowMenu = (toggleId, navId) => {
 const toggle = document.getElementById(toggleId)
 const nav=document.getElementById(navId)

   if(toggle &&nav){
    toggle.addEventListener('click', () =>{
        nav.classList.toggle('show');    //javascript css to display menu
    });
   }
};
ShowMenu('nav-toggle', 'nav-menu');

// Active and Remove Menu Mobile
const navLink =document.querySelectorAll('.nav__link');

function linkAction(){
    const navMenu = document.getElementById( 'nav-menu');
    navMenu.classList.remove('show'); //when we click on each nav__link, we remove the show class selctor
}
navLink.forEach((n) => n.addEventListener('click', linkAction));