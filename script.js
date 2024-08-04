{
    const hamMenu = document.querySelector(".ham-menu");
    const navi = document.querySelector(".navigation");
    const menuSection = document.querySelectorAll(".menu-section");

    hamMenu.addEventListener('click', function() {
        hamMenu.classList.toggle('active');
        navi.classList.toggle('active');
    });

    menuSection.forEach((menuSection) => {
        menuSection.addEventListener('click', function (){
            hamMenu.classList.remove('active');
            navi.classList.remove('active');
        });
    });
}