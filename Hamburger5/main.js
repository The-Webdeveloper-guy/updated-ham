const mobile_nav_btn = document.querySelector(".mobile-nav-btn");

const menu_header = document.querySelector(".header")


const toggleNavbar = () =>{
    // alert('clicked')
    menu_header.classList.toggle('active')

}




mobile_nav_btn.addEventListener('click',()=> toggleNavbar());