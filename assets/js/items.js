const menuBtn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobileNav')
    menuBtn.addEventListener('click', function () {
        menuBtn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });

document.getElementById('hamburger').addEventListener('click', function (){
if (document.getElementById('hamburger').classList.contains("is-active")){
    document.getElementById('main').style.display = "none";
} else {
    document.getElementById('main').style.display = "flex";
}
});